import { useState } from "react"
import { Container, Background, Form } from "./styles"
import { Input } from '../../components/Input'
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { LuMail, LuLock, LuUser, LuArrowLeft } from 'react-icons/lu'
import { useNavigate } from "react-router-dom"
import { api } from "../../services/api"

export function SignUp() {

    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleBack() {
        navigate(-1)
    }

    function handleSignup() {
        if (!name || !email || !password) {
            return alert("Preencha todos os campos!")
        }
        api.post("/users", { name, email, password })
            .then(() => {
                alert("Usuário cadastrado com sucesso!")
                navigate("/")
            })
            .catch(error => {
                if (error.response) {
                    alert(error.response.data.message)
                } else {
                    alert("Não foi possível cadastrar.")
                }
            })
    }

    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir</p>

                <h2>Crie sua conta</h2>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={LuUser}
                    onChange={e => setName(e.target.value)}
                />

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={LuMail}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={LuLock}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button
                    title="Cadastrar"
                    onClick={handleSignup}
                />
                <span>
                    <ButtonText
                        icon={LuArrowLeft}
                        title="Voltar para o login"
                        onClick={handleBack}
                    />

                </span>


            </Form>
            <Background />
        </Container>
    )
}
