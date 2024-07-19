import { Container, Background, Form } from "./styles"
import { Input } from '../../components/Input'
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { LuMail, LuLock } from 'react-icons/lu'

export function SignIn() {

  return(
    <Container>
    <Form>
      <h1>RocketMovies</h1>
      <p>Aplicação para acompanhar tudo que assistir</p>

      <h2>Faça seu login</h2>
      <Input 
      placeholder="E-mail"
      type="text"
      icon={LuMail}
      />
      <Input 
      placeholder="Senha"
      type="password"
      icon={LuLock}
      />

      <Button
      title="Entrar"
      /> 

      <ButtonText
        title="Criar Conta"
      />

    </Form>
    <Background />
    </Container>
  )
}