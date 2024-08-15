import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { Container } from "./style";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main"

export function Home() {

    const [search, setSearch] = useState('')
    const [movies, setMovies] = useState([])

    const handleSearch = (data) => {
        setSearch(data)
        console.log(search)
    }

    useEffect(() => {
        async function fetchMovies() {
            const response = await api.get("/movies")
            setMovies(response.data)
        }
        fetchMovies()
    }, [])

    useEffect(() => {
        async function searchMovies() {
            const response = await api.get(`/movies?title=${search}`)
            setMovies(response.data)
        }
        searchMovies()
    }, [search])


    return (
        <Container>
            <Header
                onSearch={handleSearch}
            />
            <Main
                moviesData={movies}
            />
        </Container>
    )
}
