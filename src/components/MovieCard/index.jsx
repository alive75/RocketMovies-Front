import { Container } from "./style";
import { Tag } from "../Tag"
import { Stars } from "../Stars";

export function MovieCard({ title, rating, description, tags }) {


    return (
        <Container>
            <h1>{title}</h1>
            <span><Stars rating={rating} /></span>
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
