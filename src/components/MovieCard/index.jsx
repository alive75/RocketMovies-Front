import { Container } from "./style";
import { Tag } from "../Tag"
import { Stars } from "../Stars";

export function MovieCard({ data, ...rest }) {


    return (
        <Container>
            <h1>{data.title}</h1>
            <span><Stars rating={String(data.rating)} /></span>
            <p>{data.description}</p>


            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
                    }
                </footer>
            }

        </Container>
    )
}
