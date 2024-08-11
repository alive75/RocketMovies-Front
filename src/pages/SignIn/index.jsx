import { useState } from "react"

import { useAuth } from "../../hooks/auth"

import { Container, Background, Form } from "./styles"
import { Input } from '../../components/Input'
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { LuMail, LuLock } from 'react-icons/lu'
import { useNavigate } from "react-router-dom"

export function SignIn() {

    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { signIn } = useAuth()

    function handleSignIn() {
        signIn({ email, password })
    }

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
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    placeholder="Senha"
                    type="password"
                    icon={LuLock}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button
                    title="Entrar"
                    onClick={handleSignIn}
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
