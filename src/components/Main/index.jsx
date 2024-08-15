import { Container, Top, Content } from "./style";
import { Button } from "../../components/Button";
import { MovieCard } from "../../components/MovieCard";
import { LuPlus } from "react-icons/lu";
import { useNavigate } from "react-router-dom"

export function Main({ moviesData }) {


    const navigate = useNavigate()

    function handleNew() {
        navigate('/new')
    }

    function handleDetails(id) {
        navigate(`/details/${id}`)
    }



    return (
        <Container>
            <Top>
                <h1>Meus Filmes</h1>
                <Button
                    icon={LuPlus}
                    title="Adicionar filme"
                    onClick={handleNew}
                />
            </Top>
            <Content id="scroll">
                {
                    moviesData.map(movie => (
                        <MovieCard
                            key={String(movie.id)}
                            data={movie}
                            onClick={() => handleDetails(movie.id)}
                        />
                    ))
                }
            </Content>
        </Container>
    )
}
