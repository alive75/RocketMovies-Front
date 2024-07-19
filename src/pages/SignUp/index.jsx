import { Container, Background, Form } from "./styles"
import { Input } from '../../components/Input'
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { LuMail, LuLock, LuUser, LuArrowLeft } from 'react-icons/lu'

export function SignUp() {

  return(
    <Container>
    <Form>
      <h1>RocketMovies</h1>
      <p>Aplicação para acompanhar tudo que assistir</p>

      <h2>Crie sua conta</h2>
      
      <Input 
      placeholder="Nome"
      type="text"
      icon={LuUser}
      />
      
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
      title="Cadastrar"
      /> 

      <ButtonText
        icon={LuArrowLeft}
        title="Voltar para o login"
      />

    </Form>
    <Background />
    </Container>
  )
}