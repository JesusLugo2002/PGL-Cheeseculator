import { styles } from "@/styles/GlobalStyles";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
interface ButtonProps {
    onPress: () => void;
    title: String;
    color?: String;
}

export default function Button({ title, onPress, color }: ButtonProps) {
    let buttonStyle;
    switch (color) {
        case "cheddar":
            buttonStyle = styles.buttonCheddar;
            break;
        case "quesoAzul":
            buttonStyle = styles.buttonQuesoAzul;
            break;
        default:
            buttonStyle = styles.buttonEdam;
            break;
    }
    return (
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
            <Text style={styles.textLight}>{title}</Text>
        </TouchableOpacity>
    )
}