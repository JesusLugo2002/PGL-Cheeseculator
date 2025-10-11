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
    const [changedToPercentage, setChangedToPercentage] = useState(false);
    const maxNumberDisplayLength = 10;

    /**
     * Restablece la calculadora a su estado inicial
     */
    const clear = () => {
        setHighlightNumber("");
        setOtherNumber("");
        setOperation("")
        setResult(null);
        setChangedToPercentage(false);
    }

    /**
     * Cambia el signo del ultimo numero añadido (o el resultado si se esta mostrando)
     */
    const changeSign = () => {
        if (result) {
            setResult(Number(result) * -1)
        }
        if (highlightNumber) {
            let num = Number(highlightNumber);
            setHighlightNumber((num * -1).toString())
        }
    }

    /**
     * Calcula el porcentaje del número o resultado
     */
    const percentageCalculator = () => {
        if (!highlightNumber) {
            return;
        }
        if (changedToPercentage == false) {
            let num = Number(highlightNumber);
            setHighlightNumber((num / 100).toString())
        }
        if (changedToPercentage == true) {
            let num = Number(highlightNumber);
            setHighlightNumber((num * 100).toString())
        }
        setChangedToPercentage(!changedToPercentage)        
    }

    /**
     * Añade el punto decimal (si ya hay un punto, no lo hace)
     */
    const setFloating = () => {
        if (!highlightNumber.includes(".")) {
            setHighlightNumber(highlightNumber ? highlightNumber + "." : "0.")
        }
    }

    /**
     * Elimina el ultimo digito
     */
    const handleRemoveDigit = () => {
        if (highlightNumber) {
            setHighlightNumber(highlightNumber.slice(0, -1));
        }
    }

    /**
     * Imprime en la pantalla el numero (si se esta mostrando un resultado, sobrescribe el resultado)
     * @param {any} buttonValue El valor numerico del boton
     */
    const handleNumberPress = (buttonValue: string) => {
        if (highlightNumber == "0" && buttonValue == "0") {
            return;
        }

        if (result != null) {
            setResult(null);
        }

        if (highlightNumber.length < maxNumberDisplayLength) {
            setHighlightNumber(highlightNumber + buttonValue);
        }
    }

   /**
    * Genera la etiqueta donde se muestra el ultimo numero añadido o el resultado (si ya se ha procesado)
    */
   const highlightNumberDisplay = () => {
    if (result) {
        return <ThemeText>{result?.toString()}</ThemeText>
    }
    if (Number(highlightNumber) < 0) {
        return <ThemeText>({highlightNumber})</ThemeText>
    }
    return <ThemeText>{highlightNumber}</ThemeText>
   }

   return (
    <>
    <View>
        <ThemeText>{otherNumber}{operation}{highlightNumberDisplay()}</ThemeText>        
    </View>
    <View style={styles.row}>
        <Button title="C" onPress={clear}/>
        <Button title="+/-" onPress={() => changeSign()}/>
        <Button title="%" onPress={() => percentageCalculator()}/>
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