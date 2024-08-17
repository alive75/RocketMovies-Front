import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { DateTime } from "luxon";
import { Container, Top, Content } from "./style";
import { LuArrowLeft, LuClock } from "react-icons/lu";
import { ButtonText } from "../../components/ButtonText";
import { Tag } from "../../components/Tag";
import { Stars } from "../../components/Stars";
import { Header } from "../../components/Header"

export function Details() {
    const [data, setData] = useState("")

    const { user } = useAuth()

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    const params = useParams()

    const navigate = useNavigate()

    function handleBack() {
        navigate(-1)
    }

    useEffect(() => {
        async function fetchMovie() {
            const response = await api.get(`/movies/${params.id}`)
            setData(response.data)
        }
        fetchMovie()
    }, [])

    const dt = DateTime.fromSQL(data.created_at).setLocale('br').toFormat(`dd/LL/yy 'às' hh:mm`)


    return (

        <Container>

            <Header />
            <Top>
                <ButtonText
                    icon={LuArrowLeft}
                    title="Voltar"
                    onClick={handleBack}
                />
            </Top>
            Top
            <Content id="scroll">

                <div className="title">
                    <h1>
                        {data.title}
                    </h1>
                    <Stars rating={String(data.rating)} />
                </div>
                <p>
                    <img src={avatarURL} alt={user.name} />
                    Por {user.name}
                    <LuClock />
                    {dt}
                </p>

                {
                    data.tags &&
                    <span>
                        {
                            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
                        }
                    </span>
                }

                <div className="description">
                    <p>{data.description}</p>
                </div>
            </Content>

        </Container >
    )
}
