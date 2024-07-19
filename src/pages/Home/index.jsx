import { Container,Top, Content  } from "./style";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { MovieCard } from "../../components/MovieCard";
import { LuPlus } from "react-icons/lu";

export function Home() {
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
  return(
    <Container>
      <Header />
            <Top>
            <h1>Meus Filmes</h1>
            <Button 
            icon={LuPlus}
            title="Adicionar filme"
            />
            </Top>
      <Content id="scroll">
            <MovieCard
              title="Ex Machina"
              rating="4"
              description="Caleb, a coder at the world’s largest internet company, wins a competition to spend a week at a private mountain retreat belonging to Nathan, the reclusive CEO of the company. But when Caleb arrives at the remote location he finds that he will have to participate in a strange and fascinating experiment in which he must interact with the world’s first true artificial intelligence, housed in the body of a beautiful robot girl."
              tags={tags}
            />
      </Content> 
    </Container>
  )
}