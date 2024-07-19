import { Container } from "./style";
import { LuPlus, LuX } from "react-icons/lu"

export function MovieItem({ isNew, value, ...rest}) {
  return(
    <Container isNew={isNew}>
      <input
      type="text"
      value={value}
      readOnly={!isNew}
      {...rest}
      />
      <button
      type="button"
      className={isNew ? 'button-add' : 'button-delete' }
      >
        {isNew ? <LuPlus /> : <LuX />}
      </button>
    </Container>
  )
}