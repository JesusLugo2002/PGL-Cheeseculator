import { styles } from "@/styles/GlobalStyles";
import { TouchableOpacity } from "react-native";
import ThemeText from "./ThemeText";

interface ButtonProps {
    onPress: () => void;
    title: String;
    isEdam?: boolean;
    isCheddar?: boolean;
}

export default function Button({ title, onPress, isCheddar }: ButtonProps) {
    const buttonStyle = isCheddar ? styles.buttonCheddar : styles.buttonEdam;
    return (
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
            <ThemeText>{title}</ThemeText>
        </TouchableOpacity>
    )
}