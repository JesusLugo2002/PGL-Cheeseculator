import { Dimensions, View } from "react-native"
import ThemeText from "./ThemeText"
import { styles } from "@/styles/GlobalStyles"
import { myColors } from "@/styles/Colors"

type Props = {
    display: string
}

export default function Screen({
    display
}: Props) {
    return (
        <View style={{
        backgroundColor: myColors.quesoAzul,
        flex: 1,
        width: "90%",
        alignItems: "flex-end",
        borderRadius: 10,
        margin: 20,
        padding: 30,
        }}>
        <ThemeText>{display}</ThemeText>
        </View>
    )
} 