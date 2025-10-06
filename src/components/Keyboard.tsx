import { useState } from "react";

export default function Keyboard() {
    const [highlightNumber, setHighlightNumber] = useState("");
    const [otherNumber, setOtherNumber] = useState("");
    const [operation, setOperation] = useState("");
    const [result, setResult] = useState<Number | null>(null);

    const clear = () => {
        setHighlightNumber("");
        setOtherNumber("");
        setResult(null);
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
            setResult(Math.sqrt(otherNumber));
            break;
        default:
            clear();
            setResult(0);
            break;
    }
   }
}