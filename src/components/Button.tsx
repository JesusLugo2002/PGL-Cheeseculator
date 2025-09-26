import { ThemeContext } from "@/context/ThemeContext";
import { styles } from "@/styles/GlobalStyles";
import { useContext } from "react";
import { Text, TouchableOpacity } from "react-native";

interface ButtonProps {
    onPress: () => void;
    title: String;
    isEdam?: boolean;
    isCheddar?: boolean;
}

export default function Button({ title, onPress, isCheddar }: ButtonProps) {
    const theme = useContext(ThemeContext);
    const buttonStyle = isCheddar ? styles.buttonCheddar : styles.buttonEdam;
    const textStyle = theme === "light" ? styles.textDark : styles.textLight
    return (
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
            <Text style={textStyle}>{ title }</Text>
        </TouchableOpacity>
    )
}