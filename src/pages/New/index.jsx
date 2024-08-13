import { useState } from "react";
import { api } from "../../services/api";
import { Container, Top, Form } from "./style";
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button"
import { Textarea } from "../../components/Textarea";
import { MovieItem } from "../../components/MovieItem";
import { Section } from "../../components/Section";
import { LuArrowLeft } from "react-icons/lu"
import { useNavigate } from "react-router-dom"

export function New() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [rating, setRating] = useState("")

    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("")

    const navigate = useNavigate()

    function handleBack() {
        navigate(-1)
    }

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag])
        setNewTag("")
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }
    function handleDeleteMovie() {
        setTitle("")
        setDescription("")
        setRating("")
        setTags([])
        setNewTag("")

    }

    async function handleNewMovie() {
        if (!title) {
            return alert("Insira o título do filme!")
        }

        if (!rating) {
            return alert("Insira a nota do filme.")
        }

        if (newTag) {
            return alert("Aperte o + para inserir um novo marcador")
        }

        await api.post("movies", {
            title,
            rating,
            description,
            tags
        })

        alert("Filme inserido com sucesso!")
        navigate(-1)
    }


    return (
        <Container>
            <Header />

            <Top>
                <ButtonText
                    icon={LuArrowLeft}
                    title="Voltar"
                    onClick={handleBack}
                />
            </Top>

            <Form id="scroll">
                <h1>Novo Filme</h1>

                <div className="col-2">
                    <Input
                        type="text"
                        placeholder="Título"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />

                    <Input
                        type="number"
                        id="rating"
                        placeholder="Sua nota (de 0 a 5)"
                        value={rating}
                        onChange={e => {
                            const value = Math.max(0, Math.min(5, Number(e.target.value)))
                            setRating(value)
                        }
                        }

                    />
                </div>

                <Textarea
                    placeholder="Observações"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />

                <Section title="Marcadores">
                    <div className="tag-group">
                        {
                            tags.map((tag, index) => (
                                <MovieItem
                                    key={String(index)}
                                    value={tag}
                                    onClick={() => handleRemoveTag(tag)}
                                />
                            ))
                        }
                        <MovieItem
                            $isnew={true}
                            placeholder="Novo marcador"
                            onChange={e => setNewTag(e.target.value)}
                            value={newTag}
                            onClick={handleAddTag}
                        />
                    </div>
                </Section>
                <div className="col-2">

                    <Button
                        title="Excluir filme"
                        className="delete"
                        onClick={handleDeleteMovie}
                    />

                    <Button
                        title="Salvar alterações"
                        onClick={handleNewMovie}
                    />
                </div>
            </Form>

        </Container>
    )
}
