import { styles } from "@/styles/GlobalStyles";
import { useState } from "react";
import { View } from "react-native";
import Button from "./Button";
import ThemeText from "./ThemeText";

export default function Keyboard() {
    const [highlightNumber, setHighlightNumber] = useState("");
    const [otherNumber, setOtherNumber] = useState("");
    const [operation, setOperation] = useState("");
    const [result, setResult] = useState<Number | null>(null);

    const clear = () => {
        setResult(null);
        setHighlightNumber("");
        setOtherNumber("");
        setOperation("")
    }

    const handleNumberPress = (buttonValue: string) => {
        if (result != null) {
            setResult(null);
        }
        if (highlightNumber.length < 10) {
            setHighlightNumber(highlightNumber + buttonValue);
        }
    }

    const handleOperationPress = (buttonValue: string) => {
        setOperation(buttonValue);
        if (result != null) {
            setOtherNumber(result.toString());
            setResult(null);
        } else {
            setOtherNumber(highlightNumber)
        }
        setHighlightNumber("");
    }

   const getResult = () => {
    switch (operation) {
        case "+":
            clear();
            setResult(parseInt(otherNumber) + parseInt(highlightNumber));
            break;
        case "-":
            clear();
            setResult(parseInt(otherNumber) - parseInt(highlightNumber));
            break;
        case "x":
            clear();
            setResult(parseInt(otherNumber) * parseInt(highlightNumber));
            break;
        case "÷":
            clear();
            setResult(parseInt(otherNumber) / parseInt(highlightNumber));
            break;
        case "%":
            clear();
            setResult((parseInt(otherNumber) / parseInt(highlightNumber)) * 100);
            break;
        case "√":
            clear();
            setResult(Math.sqrt(parseInt(otherNumber)));
            break;
        default:
            clear();
            setResult(0);
            break;
    }
   }

   const highlightNumberDisplay = () => {
    if (result != null) {
        return <ThemeText>{result?.toString()}</ThemeText>
    }
    if (highlightNumber && highlightNumber.length < 6) {
        return <ThemeText>{highlightNumber}</ThemeText>
    }
    if (highlightNumber == "") {
        return <ThemeText>0</ThemeText>
    }
    return <ThemeText>{highlightNumber}</ThemeText>
   }

   return (
    <>
    <View>
        <ThemeText>{otherNumber}</ThemeText>
        <ThemeText>{operation}</ThemeText> 
        {highlightNumberDisplay()}
    </View>
    <View style={styles.row}>
        <Button title="C" onPress={clear}/>
        <Button title="+/-" onPress={() => handleOperationPress("+/-")}/>
        <Button title="%" onPress={() => handleOperationPress("%")}/>
        <Button title="÷" onPress={() => handleOperationPress("÷")}/>
    </View>
    <View style={styles.row}>
        <Button title="7" onPress={() => handleNumberPress("7")}/>
        <Button title="8" onPress={() => handleNumberPress("8")}/>
        <Button title="9" onPress={() => handleNumberPress("9")}/>
        <Button title="x" onPress={() => handleOperationPress("x")}/>
    </View>
    <View style={styles.row}>
        <Button title="4" onPress={() => handleNumberPress("4")}/>
        <Button title="5" onPress={() => handleNumberPress("5")}/>
        <Button title="6" onPress={() => handleNumberPress("6")}/>
        <Button title="-" onPress={() => handleOperationPress("-")}/>
    </View>
    <View style={styles.row}>
        <Button title="1" onPress={() => handleNumberPress("1")}/>
        <Button title="2" onPress={() => handleNumberPress("2")}/>
        <Button title="3" onPress={() => handleNumberPress("3")}/>
        <Button title="+" onPress={() => handleOperationPress("+")}/>
    </View>
    <View style={styles.row}>
        <Button title="." onPress={() => handleNumberPress("1")}/>
        <Button title="0" onPress={() => handleNumberPress("2")}/>
        <Button title="⌫" onPress={() => setHighlightNumber(highlightNumber.slice(0, -1))}/>
        <Button title="=" onPress={() => getResult()}/>
    </View>
    </>
   )
}