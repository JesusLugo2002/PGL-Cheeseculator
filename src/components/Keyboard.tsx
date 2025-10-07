import { styles } from "@/styles/GlobalStyles";
import { useState } from "react";
import { View } from "react-native";
import Button from "./Button";
import ThemeText from "./ThemeText";
import Operations from "@/modules/Operations";

export default function Keyboard() {
    const [highlightNumber, setHighlightNumber] = useState("");
    const [otherNumber, setOtherNumber] = useState("");
    const [operation, setOperation] = useState("");
    const [result, setResult] = useState<Number | null>(null);

    const maxNumberDisplayLength = 10;

    const clear = () => {
        setHighlightNumber("");
        setOtherNumber("");
        setOperation("")
        setResult(null);
    }

    const changeSign = () => {
        if (highlightNumber) {
            const num = Number(highlightNumber);
            setHighlightNumber((num * -1).toString())
        }
    }

    const setFloating = () => {
        if (!highlightNumber.includes(".")) {
            if (highlightNumber == "") {
                setHighlightNumber("0.");
            } else {
                setHighlightNumber(highlightNumber + ".");
            }
        }
    }

    const handleRemoveDigit = () => {
        if (highlightNumber) {
            setHighlightNumber(highlightNumber.slice(0, -1));
        }
    }

    const handleNumberPress = (buttonValue: string) => {
        if (!highlightNumber && buttonValue == "0") {
            return;
        }

        if (result != null) {
            setResult(null);
        }

        if (highlightNumber.length < maxNumberDisplayLength) {
            setHighlightNumber(highlightNumber + buttonValue);
        }
    }

    const handleOperationPress = (buttonValue: string) => {
        setOperation(buttonValue);
        if (result) {
            setOtherNumber(result.toString());
            setHighlightNumber("");
            setResult(null);
        } else {
            setOtherNumber(highlightNumber == "" ? "0" : highlightNumber);
            setHighlightNumber("");     
        }
    }

    const handleGetResult = () => {
        if (operation) {
            clear();
            setResult(getResult());
        }
    }

   const getResult = () => {
    switch (operation) {
        case "+":
            return Operations.add(otherNumber, highlightNumber);
        case "-":
            return Operations.substract(otherNumber, highlightNumber);
        case "x":
            return Operations.multiply(otherNumber, highlightNumber);
        case "÷":
            return Operations.divide(otherNumber, highlightNumber);
        default:
            return 0;
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
        <Button title="+/-" onPress={() => changeSign()}/>
        <Button title="%" onPress={() => alert("Work in progress :)")}/>
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
        <Button title="." onPress={() => setFloating()}/>
        <Button title="0" onPress={() => handleNumberPress("0")}/>
        <Button title="⌫" onPress={() => handleRemoveDigit()}/>
        <Button title="=" onPress={() => handleGetResult()}/>
    </View>
    </>
   )
}