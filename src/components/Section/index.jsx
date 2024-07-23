import { Container } from "./style";

export function Section({ title, children }) {
    return (
        <Container>
            <h2>
                {title}
            </h2>
            <div class="tags">
                {children}
            </div>
        </Container>
    )
}
