import { StyleSheet } from "react-native";
import { myColors } from "./Colors";

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#333333",
        flex: 1,
        height: 70,
        alignItems: "center",
        justifyContent: "center",
        borderRadius:90,
        margin: 5,
    },
    textLight: {
        color: myColors.dark,
        fontSize: 24,
    },
    textDark: {
        color: myColors.white,
        fontSize:24,
    }
    textSecondary: {
        color: "#060606",
    },
    row:{
        maxWidth: '100%',
        flexDirection: 'row'
    }
});