import { Container, Top, Content } from "./style";
import { LuArrowLeft, LuClock } from "react-icons/lu";
import { ButtonText } from "../../components/ButtonText";
import { Tag } from "../../components/Tag";
import { Stars } from "../../components/Stars";
import { Header } from "../../components/Header"
import { useNavigate } from "react-router-dom"

export function Details() {
    const tags = [{
        id: 1,
        name: "Ficção Cientifica"
    },
    {
        id: 2,
        name: "Drama"
    },
    {
        id: 3,
        name: "Suspense"
    },

    ]

    const navigate = useNavigate()

    function handleBack() {
        navigate(-1)
    }

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
                        Ex Machina
                    </h1>
                    <Stars rating='4' />
                </div>
                <p>
                    <img src="http://github.com/alive75.png" alt="Profile Picture" />
                    Por Thiago Santana
                    <LuClock />
                    24/07/2024 às 22:55
                </p>

                {
                    tags &&
                    <span>
                        {
                            tags.map(tag => <Tag key={tag.id} title={tag.name} />)
                        }
                    </span>
                }

                <div className="description">
                    <p>Caleb, a coder at the world’s largest internet company, wins a competition to spend a week at a private mountain retreat belonging to Nathan, the reclusive CEO of the company. But when Caleb arrives at the remote location he finds that he will have to participate in a strange and fascinating experiment in which he must interact with the world’s first true artificial intelligence, housed in the body of a beautiful robot girl.</p>
                </div>
            </Content>

        </Container >
    )
}
