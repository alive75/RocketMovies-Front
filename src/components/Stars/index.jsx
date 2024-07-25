import { Star } from "../Star"
import { StarEmpty } from "../StarEmpty"

export function Stars({ rating }) {

    let stars

    switch (rating) {
        case '0':
            stars = <>
                <StarEmpty />
                <StarEmpty />
                <StarEmpty />
                <StarEmpty />
                <StarEmpty />
            </>

            break

        case '1':
            stars = <>
                <Star />
                <StarEmpty />
                <StarEmpty />
                <StarEmpty />
                <StarEmpty />
            </>
            break

        case '2':
            stars = <>
                <Star />
                <Star />
                <StarEmpty />
                <StarEmpty />
                <StarEmpty />
            </>
            break

        case '3':
            stars = <>
                <Star />
                <Star />
                <Star />
                <StarEmpty />
                <StarEmpty />
            </>
            break

        case "4":
            stars =
                <>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <StarEmpty />
                </>
            break

        case '5':
            stars = <>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
            </>
            break

        default:
            stars = <>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
            </>

            break

    }
    return (
        <>
            {stars}
        </>
    )
}
