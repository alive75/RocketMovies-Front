import { Container, Avatar, Form } from "./style"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { LuMail, LuLock, LuUser, LuArrowLeft, LuCamera } from "react-icons/lu"

export function Profile() {
  return(
    <Container>
      <header>
        <ButtonText
          title="Voltar"
          icon={LuArrowLeft}
        />
      </header>
      <Form>
        <Avatar>
          <img src="http://github.com/alive75.png" alt="Profile Picture" />

          <label htmlFor="avatar">
            <LuCamera />
            <input
              type="file"
              id="avatar"
            />
          </label>

        </Avatar>
          
          <Input 
            type="text" 
            icon={LuUser}
            placeholder="Nome"
          />
          
          <Input 
            type="password" 
            icon={LuMail}
            placeholder="E-mail"
          />
          
          <Input 
            type="password" 
            icon={LuLock}
            placeholder="Senha atual"
          />
          
          <Input 
            type="password" 
            icon={LuLock}
            placeholder="Nova senha"
          />

          <Button
            title="Salvar"
          />


      </Form>
    </Container>
  )
}