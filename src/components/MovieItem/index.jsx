import { Container } from "./style";
import { LuPlus, LuX } from "react-icons/lu"

export function MovieItem({ $isnew, value, onClick, ...rest }) {
    return (
        <Container $isnew={$isnew}>
            <input
                type="text"
                value={value}
                readOnly={!$isnew}
                {...rest}
            />
            <button
                type="button"
                onClick={onClick}
                className={$isnew ? 'button-add' : 'button-delete'}
            >
                {$isnew ? <LuPlus /> : <LuX />}
            </button>
        </Container>
    )
}
