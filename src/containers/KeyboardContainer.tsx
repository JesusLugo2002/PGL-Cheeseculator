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

    /**
     * Reestablece la calculadora
     * @returns {void}   
     */
    const clear = (): void => {
        setResult(null);
        setOperation("");
        setToPercentage(false);
    }

    /**
     * Gestiona el funcionamiento de una tecla al presionarla, dependiendo de si
     * es un operador o un número.
     * @param {string} keyValue:string
     * @returns {void}
     */
    const handleKeyPress = (keyValue: string): void => {
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

    /**
     * Elimina el último dígito/operador
     * @returns {void}
     */
    const handleRemoveDigit = (): void => {
        if (operation) {
            setOperation(operation.slice(0, -1))
        }
    }

    /**
     * Evalua la operación y devuelve el resultado.
     * @returns {string|void} 
     */
    const handleEqualsPress = (): string|void => {
        if (lastKeyIsOperator) {
            return;
        }
        const operationResult = eval(operation);
        setResult(operationResult);
        setDisplay(operationResult);
        return operationResult;
    }

    /**
     * Devuelve `true` si el número pasado por argumento es negativo, si no, `false`.
     * @param {string} value Número a comprobar.
     * @returns {boolean}
     */
    const isNegative = (value: string): boolean => {
        return value.startsWith("(-");
    }

    /**
     * Devuelve el último número de la operación.
     * @returns {string}
     */
    const getLastNumber = (): string => {
        const match = operation.match(LAST_NUMBER_PATTERN);
        return match ? match[2] : ""
    }

    /**
     * Actualiza el valor del último numero
     * @param {string} newValue El valor para reemplazar
     * @returns {boolean} `true` si pudo cambiarse, si no, `false`
     */
    const setLastNumber = (newValue: string): boolean => {
        if (LAST_NUMBER_PATTERN.test(operation)) {
            setOperation(operation.replace(LAST_NUMBER_PATTERN, (_, operator, _number) => {
                return operator + newValue;
            }))
            return true;
        }
        return false;
    }

    /**
     * Cambia el signo del último número de la operación.
     * @returns {void}
     */
    const handleChangeSign = (): void => {
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

        setLastNumber(isNegative(lastNumber) ? lastNumber.slice(2, -1) : `(-${lastNumber})`)
    }

    /**
     * Convierte el último numero en un porcentaje decimal.
     * @returns {void}
     */
    const handleSetPercentage = (): void => {
        const lastNumber = getLastNumber();        
        if (!lastNumber) {
            return;
        }
        let result = Number(isNegative(lastNumber) ? lastNumber.slice(2, -1) : lastNumber);
        result = isPercentage ? result * 100 : result / 100;
        setLastNumber(isNegative(lastNumber) ? `(-${result})` : result.toString());
        setToPercentage(!isPercentage);
    }

    /**
     * Añade el punto decimal (si no existe), en el último número.
     * @returns {void}
     */
    const handleSetFloating = (): void => {
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