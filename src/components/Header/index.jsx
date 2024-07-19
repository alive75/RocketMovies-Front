import { Container, Brand, Profile } from "./style";
import { ButtonText } from "../ButtonText"
import { Input } from "../Input"

export function Header() {
  return(
    <Container>
      <Brand>
        <ButtonText
        title="RocketMovies"
        />
      </Brand>
      
      <Input
        placeholder="Pesquisar pelo título"
      />

      <Profile>
        <div>
        <a href="#">Thiago Santana</a>

        <span>
        <ButtonText
          title="sair"
        />

        </span>
        </div>

        <a href="#">
        <img src="http://github.com/alive75.png" alt="Thiago Santana" />
        </a>
      </Profile>

    </Container>
  )
  
}