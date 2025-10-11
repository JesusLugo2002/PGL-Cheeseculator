import ThemeText from "./ThemeText"

type Props = {
    display: string
}

export default function Screen({
    display
}: Props) {
    return (
        <ThemeText>{display}</ThemeText>
    )
} 