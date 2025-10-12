import { useState } from "react"
import KeyboardContainer from "./KeyboardContainer";
import Screen from "@/components/Screen";
import Historial from "@/components/Historial";
import { Log } from "@/components/HistorialLog";


export default function CalculatorContainer() {
    const [display, setDisplay] = useState("");
    const [historial, setHistorial] = useState<Log[]>([]);

    const addLog = (operation: string, result: string): void => {
        setHistorial([...historial, {operation: operation, result: result}])
    }

    return (
        <>
        <Screen display={display}/>
        <KeyboardContainer setDisplay={setDisplay} addLog={addLog}/>
        <Historial historial={historial}/>
        </>
    )
}