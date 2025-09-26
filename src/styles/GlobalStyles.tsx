import { StyleSheet } from "react-native";
import { myColors } from "./Colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: myColors.white
    },
    buttonDark: {
        backgroundColor: "#333333",
        width: 70,
        height: 70,
        alignItems: "center",
        justifyContent: "center",
        borderRadius:90,
        margin: 5,
    },
    buttonEdam: {
        backgroundColor: myColors.edam,
        width: 70,
        height: 70,
        alignItems: "center",
        justifyContent: "center",
        borderRadius:90,
        margin: 5,
    },
    buttonCheddar: {
        backgroundColor: myColors.cheddar,
        width: 70,
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
    },
    textSecondary: {
        color: "#060606",
    },
    row:{
        maxWidth: '100%',
        flexDirection: 'row'
    }
});