import { Container, Brand, Profile } from "./style";
import { ButtonText } from "../ButtonText"
import { Input } from "../Input"
import { useNavigate } from "react-router-dom"

export function Header() {

    const navigate = useNavigate()

    function handleHome() {
        navigate('/')
    }

    function handleSignOut() {
        navigate('/')
    }

    return (
        <Container>
            <Brand>
                <ButtonText
                    title="RocketMovies"
                    onClick={handleHome}
                />
            </Brand>

            <Input
                placeholder="Pesquisar pelo título"
            />

            <Profile>
                <div>
                    <a href="/profile">Thiago Santana</a>

                    <span>
                        <ButtonText
                            title="sair"
                            onClick={handleSignOut}
                        />

                    </span>
                </div>

                <a href="/profile">
                    <img src="http://github.com/alive75.png" alt="Thiago Santana" />
                </a>
            </Profile>

        </Container>
    )

}
