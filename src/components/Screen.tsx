import { View } from "react-native"
import ThemeText from "./ThemeText"

type Props = {
    display: string
}

export default function Screen({
    display
}: Props) {
    return (
        <View style={{backgroundColor: "#f1f1f1",
        padding: 20,
        borderRadius: 10,
        alignItems: "flex-end",
        marginBottom: 10, }}>
        <ThemeText>{display}</ThemeText>
        </View>
    )
} 