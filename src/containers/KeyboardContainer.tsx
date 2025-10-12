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
    const [isPercentage, setToPercentage] = useState(false);

    const OPERATORS = ["+", "-", "*", "/"];
    const LAST_NUMBER_PATTERN = /((?:\d+[\+\-\*\/])*)((?:\d+(?:\.\d+)?)|(?:\(\-\d+(?:\.\d+)?)\))$/;

    const lastKeyIsOperator = OPERATORS.includes(operation.charAt(operation.length - 1))
    const resultNotNull = result || result == 0

    useEffect(() => {
        setDisplay(operation);
    }, [operation]);

    const clear = () => {
        setResult(null);
        setOperation("");
        setToPercentage(false);
    }

    const handleKeyPress = (keyValue: string) => {
        const keyValueIsOperator = OPERATORS.includes(keyValue)
        if (keyValueIsOperator) {
            setToPercentage(false);
        }
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

    const isNegative = (value: string) => {
        return value.startsWith("(-");
    }

    const getLastNumber = () => {
        const match = operation.match(LAST_NUMBER_PATTERN);
        if (match) {
            return match[2];
        }
    }

    const setLastNumber = (newValue: string) => {
        if (LAST_NUMBER_PATTERN.test(operation)) {
            setOperation(operation.replace(LAST_NUMBER_PATTERN, (_, operator, _number) => {
                return operator + newValue;
            }))
        }
    }

    const handleChangeSign = () => {
        if (result) {
            const newResult = result * -1;
            setResult(newResult);
            setDisplay(newResult.toString());
            return;
        }

        const lastNumber = getLastNumber();
        if (!lastNumber) {
            return;
        }

        if (lastNumber.startsWith("(-")) {
            setLastNumber(lastNumber.slice(2, -1))
        } else {
            setLastNumber(`(-${lastNumber})`);
        }
    }

    const handleSetPercentage = () => {
        const lastNumber = getLastNumber();        
        if (!lastNumber) {
            return;
        }
        let result = Number(lastNumber.startsWith("(-") ? lastNumber.slice(2, -1) : lastNumber);
        if (isPercentage) {
            result *= 100;
        } else {
            result /= 100;
        }
        setLastNumber(lastNumber.startsWith("(-") ? `(-${result})` : result.toString());
        setToPercentage(!isPercentage);
    }

    const handleSetFloating = () => {
        const lastNumber = getLastNumber();
        if (!lastNumber || result) {
            return;
        }
        if (!lastNumber.includes(".") && !isNegative(lastNumber)) {
            setLastNumber(`${lastNumber}.`);
        }
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