import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container, Top, Content } from "./style";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { MovieCard } from "../../components/MovieCard";
import { LuPlus } from "react-icons/lu";
import { useNavigate } from "react-router-dom"

export function Home() {

    const [movies, setMovies] = useState([])

    const navigate = useNavigate()

    function handleNew() {
        navigate('/new')
    }

    useEffect(() => {
        async function fetchMovies() {
            const response = await api.get("/movies")
            console.log((response.data))
            setMovies(response.data)
        }
        fetchMovies()
    }, [])

    return (
        <Container>
            <Header />
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
                    movies.map(movie => (
                        <MovieCard
                            key={String(movie.id)}
                            data={movie}
                        />
                    ))
                }
            </Content>
        </Container>
    )
}
