import { Container } from "./style";

export function Button({ title, className, loading = false, icon: Icon, ...rest }) {
    return (
        <Container
            type="button"
            className={className}
            disabled={loading}
            {...rest}
        >
            {Icon && <Icon size={20} />}
            {loading ? 'Carregando' : title}
        </Container>
    )
}
