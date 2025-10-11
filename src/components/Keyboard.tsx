import { View } from "react-native"
import { styles } from "@/styles/GlobalStyles"
import Button from "./Button"

type Props = {
    onClear: () => void
    onKeyPress: (value: string) => void
    onRemoveDigit: () => void
    onEqualsPress: () => void
    onChangeSign: () => void
    onSetPercentage: () => void
    onSetFloating: () => void
}

export default function Keyboard({
    onClear,
    onKeyPress,
    onRemoveDigit,
    onEqualsPress,
    onChangeSign,
    onSetPercentage,
    onSetFloating
}: Props) {
    
    return (
        <>
        <View style={styles.row}>
            <Button title="C" onPress={onClear}/>
            <Button title="+/-" onPress={() => onChangeSign()}/>
            <Button title="%" onPress={() => onSetPercentage()}/>
            <Button title="÷" onPress={() => onKeyPress("/")}/>
        </View>
        <View style={styles.row}>
            <Button title="7" onPress={() => onKeyPress("7")}/>
            <Button title="8" onPress={() => onKeyPress("8")}/>
            <Button title="9" onPress={() => onKeyPress("9")}/>
            <Button title="x" onPress={() => onKeyPress("*")}/>
        </View>
        <View style={styles.row}>
            <Button title="4" onPress={() => onKeyPress("4")}/>
            <Button title="5" onPress={() => onKeyPress("5")}/>
            <Button title="6" onPress={() => onKeyPress("6")}/>
            <Button title="-" onPress={() => onKeyPress("-")}/>
        </View>
        <View style={styles.row}>
            <Button title="1" onPress={() => onKeyPress("1")}/>
            <Button title="2" onPress={() => onKeyPress("2")}/>
            <Button title="3" onPress={() => onKeyPress("3")}/>
            <Button title="+" onPress={() => onKeyPress("+")}/>
            </View>
        <View style={styles.row}>
            <Button title="." onPress={() => onSetFloating()}/>
            <Button title="0" onPress={() => onKeyPress("0")}/>
            <Button title="⌫" onPress={() => onRemoveDigit()}/>
            <Button title="=" onPress={() => onEqualsPress()}/>
        </View>
        </>
    )
}