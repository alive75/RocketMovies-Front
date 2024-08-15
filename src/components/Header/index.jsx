import { useAuth } from "../../hooks/auth";
import { Container, Brand, Profile } from "./style";
import { ButtonText } from "../ButtonText"
import { Input } from "../Input"
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"
import { useNavigate } from "react-router-dom"
import { api } from "../../services/api";
import { useEffect, useState } from "react";

export function Header({ onSearch }) {

    const [inputValue, setInputValue] = useState('')


    const { signOut, user } = useAuth()
    const navigate = useNavigate()

    function handleHome() {
        navigate('/')
    }

    function handleSignOut() {
        navigate('/')
        signOut()
    }

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    let value

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
                onChange={
                    (e) => {
                        value = e.target.value
                        setInputValue(e.target.value)
                        onSearch(value)
                    }
                }
            />

            <Profile>
                <div>
                    <a href="/profile">{user.name}</a>

                    <span>
                        <ButtonText
                            title="sair"
                            onClick={handleSignOut}
                        />

                    </span>
                </div>

                <a href="/profile">
                    <img src={avatarURL} alt={user.name} />
                </a>
            </Profile>

        </Container>
    )

}
