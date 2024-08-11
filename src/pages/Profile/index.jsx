import { useState } from "react"
import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api"
import { Container, Avatar, Form } from "./style"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { LuMail, LuLock, LuUser, LuArrowLeft, LuCamera } from "react-icons/lu"
import { useNavigate } from "react-router-dom"
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

export function Profile() {

    const { user, updateProfile } = useAuth()

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [passwordOld, setPasswordOld] = useState()
    const [passwordNew, setPasswordNew] = useState()

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    const [avatar, setAvatar] = useState(avatarURL)
    const [avatarFile, setAvatarFile] = useState(null)

    const navigate = useNavigate()

    function handleBack() {
        navigate(-1)
    }

    async function handleUpdate() {
        const updated = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld
        }

        const userUpdate = Object.assign(user, updated)

        await updateProfile({ user, avatarFile })
    }

    function handleChangeAvatar(event) {
        const file = event.target.files[0]
        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
    }

    return (
        <Container>
            <header>
                <ButtonText
                    title="Voltar"
                    icon={LuArrowLeft}
                    onClick={handleBack}
                />
            </header>
            <Form>
                <Avatar>
                    <img src={avatar} alt={user.name} />

                    <label htmlFor="avatar">
                        <LuCamera />
                        <input
                            type="file"
                            id="avatar"
                            onChange={handleChangeAvatar}
                        />
                    </label>

                </Avatar>

                <Input
                    type="text"
                    icon={LuUser}
                    placeholder={name}
                    onChange={e => setName(e.target.value)}
                />

                <Input
                    type="text"
                    icon={LuMail}
                    placeholder={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    type="password"
                    icon={LuLock}
                    placeholder="Senha atual"
                    onChange={e => setPasswordOld(e.target.value)}
                />

                <Input
                    type="password"
                    icon={LuLock}
                    placeholder="Nova senha"
                    onChange={e => setPasswordNew(e.target.value)}
                />

                <Button
                    title="Salvar"
                    onClick={handleUpdate}
                />


            </Form>
        </Container>
    )
}
