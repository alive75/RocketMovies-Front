import { Container } from "./style";
import starsImg from "../../assets/star.svg"
import starsEmptyImg from "../../assets/star_empty.svg"
import { Tag } from "../Tag"

export function MovieCard({title, rating, description, tags}) {

      let stars

      const starEmpty = <img src={starsEmptyImg} />
      const star = <img src={starsImg} />

      switch (rating) {
        case '0':
         stars = 
            <>
            {starEmpty}
            {starEmpty}
            {starEmpty}
            {starEmpty}
            {starEmpty}
            </>
          
          break

        case '1':
            stars = 
            <>
            {star}
            {starEmpty}
            {starEmpty}
            {starEmpty}
            {starEmpty}
            </>
          break

        case '2':
            stars = 
            <>
            {star}
            {star}
            {starEmpty}
            {starEmpty}
            {starEmpty}
            </>
          break

        case '3':
            stars = 
            <>
            {star}
            {star}
            {star}
            {starEmpty}
            {starEmpty}
            </>
          break

        case "4":
            stars=
            <>
            {star}
            {star}
            {star}
            {star}
            {starEmpty}
            </>
          break

        case '5':
            stars = 
            <>
            {star}
            {star}
            {star}
            {star}
            {star}
            </>
          break

          default:
            console.log(Rating)
              stars=
              <>
              {star}
              {star}
              {star}
              {star}
              {star}
              </>
            
            break

      }
    
  return(
    <Container>
      <h1>{title}</h1>
      <span>{stars}</span>
      <p>{description}</p>

      
      {
        tags &&
        <footer>
            {
              tags.map(tag => <Tag key={tag.id} title={tag.name} />)
            }
        </footer>
      }

    </Container>
  )
}