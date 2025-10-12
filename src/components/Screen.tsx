import { StyleSheet, Text, View } from "react-native"
import { myColors } from "@/styles/Colors"

type Props = {
    display: string
}

export default function Screen({display}: Props) {
    return (
        <View style={styles.displayContainer}>
            <Text style={styles.displayText}>{display}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    displayText: {
        fontSize: 32
    },
    displayContainer: {
        backgroundColor: myColors.quesoAzul,
        flex: 1,
        width: "90%",
        alignItems: "flex-end",
        borderRadius: 10,
        margin: 20,
        padding: 30,
    }
})