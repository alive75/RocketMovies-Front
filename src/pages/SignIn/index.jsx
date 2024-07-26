import { Container, Background, Form } from "./styles"
import { Input } from '../../components/Input'
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { LuMail, LuLock } from 'react-icons/lu'
import { useNavigate } from "react-router-dom"

export function SignIn() {

    const navigate = useNavigate()

    function handleRegister() {
        navigate('/register')
    }

    return (
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

                <span>
                    <ButtonText
                        title="Criar Conta"
                        onClick={handleRegister}
                    />

                </span>


            </Form>
            <Background />
        </Container>
    )
}
