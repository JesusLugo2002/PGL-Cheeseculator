import Keyboard from "@/components/Keyboard";
import { useEffect, useState } from "react";

type Props = {
    setDisplay: (operation: string) => void
}

export default function KeyboardContainer({
    setDisplay
}: Props) {
    const [operation, setOperation] = useState<string>("");
    const [result, setResult] = useState<number|null>(null);

    const OPERATORS = ["+", "-", "*", "/"];

    const lastKeyIsOperator = OPERATORS.includes(operation.charAt(operation.length - 1))
    const resultNotNull = result || result == 0

    useEffect(() => {
        setDisplay(operation);
    }, [operation]);

    const clear = () => {
        setResult(null);
        setOperation("");
    }

    const handleKeyPress = (keyValue: string) => {
        const keyValueIsOperator = OPERATORS.includes(keyValue)
        if (keyValueIsOperator && lastKeyIsOperator) {
            setOperation(operation.replace(/[\+\-\*\/]$/, keyValue))
            return;
        }
        if (!keyValueIsOperator && operation.charAt(operation.length - 1) == ")") {
            return;
        }
        if (resultNotNull) {
            setOperation(keyValueIsOperator ? result.toString() + keyValue : keyValue);
            setResult(null);
            return;
        }
        if (!operation && keyValueIsOperator) {
            setOperation("0" + keyValue);
            return;
        }
        setOperation(operation + keyValue);
    }

    const handleRemoveDigit = () => {
        if (operation) {
            setOperation(operation.slice(0, -1))
        }
    }

    const handleEqualsPress = () => {
        if (lastKeyIsOperator) {
            return;
        }
        const operationResult = eval(operation);
        setResult(operationResult);
        setDisplay(operationResult);
    }

    const handleChangeSign = () => {
        if (result) {
            const newResult = result * -1;
            setResult(newResult);
            setDisplay(newResult.toString());
            return;
        }

        if (/^\d+$|^\(-?\d+\)$/.test(operation)) {
            setOperation(operation.startsWith("(-") ? operation.slice(2, -1) : `(-${operation})`);
            return;
        }

        setOperation(operation.replace(/([\+\-\*\/])(\d+|\(\-?\d+\))$/, (_, operator, number) => {
            if (number.startsWith("(-")) {
                const positive = number.slice(2, -1)
                return operator + positive;
            }
            return operator + `(-${number})`;
        }));
    }

    const handleSetPercentage = () => {
        setOperation
    }

    const handleSetFloating = () => {
        
    }

    return <Keyboard
        onClear={clear}
        onKeyPress={handleKeyPress}
        onRemoveDigit={handleRemoveDigit}
        onEqualsPress={handleEqualsPress}
        onChangeSign={handleChangeSign}
        onSetPercentage={handleSetPercentage}
        onSetFloating={handleSetFloating}
    />
}