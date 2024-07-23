import { Container, Top, Form } from "./style";
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button"
import { Textarea } from "../../components/Textarea";
import { MovieItem } from "../../components/MovieItem";
import { Section } from "../../components/Section";
import { LuArrowLeft } from "react-icons/lu"

export function New() {
    return (
        <Container>
            <Header />

            <Top>
                <ButtonText
                    icon={LuArrowLeft}
                    title="Voltar"
                />
            </Top>

            <Form id="scroll">
                <h1>Novo Filme</h1>

                <div class="col-2">
                    <Input
                        type="text"
                        placeholder="Título"
                    />

                    <Input
                        type="text"
                        placeholder="Sua nota (de 0 a 5)"
                    />
                </div>

                <Textarea
                    placeholder="Observações"
                />

                <Section title="Marcadores">
                    <div class="tags">
                        <MovieItem
                            value="Drama"
                        />
                        <MovieItem
                            isNew
                            placeholder="Novo marcador"
                        />
                    </div>
                </Section>
                <div class="col-2">

                    <Button
                        title="Excluir filme"
                    />

                    <Button
                        title="Salvar alterações"
                    />
                </div>
            </Form>

        </Container>
    )
}
