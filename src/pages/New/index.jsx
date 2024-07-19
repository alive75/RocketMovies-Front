import { Container, Top, Form, Section } from "./style";
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button"
import { Textarea } from "../../components/Textarea";
import { MovieItem } from "../../components/MovieItem";
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

      <Form>
        <h1>Novo Filme</h1>

        <Input
        type="text"
        placeholder="Título"
        />

        <Input
        type="text"
        placeholder="Título"
        />

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

        <Button
          title="Excluir filme"
        />
        
        <Button
          title="Salvar alterações"
        />
      </Form>

    </Container>
  )
}
