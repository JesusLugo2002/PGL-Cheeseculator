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

    const layout = [
        [
            { key: "C", onPress: () => onClear()}, 
            { key: "+/-", onPress: () => onChangeSign() }, 
            { key: "%", onPress: () => onSetPercentage() }, 
            { key: "÷", onPress: () => onKeyPress("/") }
        ],
        [
            { key: "7", onPress: () => onKeyPress("7") }, 
            { key: "8", onPress: () => onKeyPress("8") }, 
            { key: "9", onPress: () => onKeyPress("9") }, 
            { key: "x", onPress: () => onKeyPress("*") }
        ],
        [
            { key: "4", onPress: () => onKeyPress("4") }, 
            { key: "5", onPress: () => onKeyPress("5") }, 
            { key: "6", onPress: () => onKeyPress("6") }, 
            { key: "-", onPress: () => onKeyPress("-") }
        ],
        [
            { key: "1", onPress: () => onKeyPress("1") }, 
            { key: "2", onPress: () => onKeyPress("2") }, 
            { key: "3", onPress: () => onKeyPress("3") }, 
            { key: "+", onPress: () => onKeyPress("+") }
        ],
        [
            { key: ".", onPress: () => onSetFloating() }, 
            { key: "0", onPress: () => onKeyPress("0") }, 
            { key: "⌫", onPress: () => onRemoveDigit() }, 
            { key: "=", onPress: () => onEqualsPress() }
        ]
    ]
    
    return (
        <>
        {layout.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
                {row.map((button, buttonIndex) => (
                <Button 
                    key={`${rowIndex}-${buttonIndex}`} 
                    title={button.key} 
                    onPress={button.onPress} 
                />
                ))}
            </View>
        ))}
        </>
    )
}