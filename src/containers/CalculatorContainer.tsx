import { useState } from "react"
import KeyboardContainer from "./KeyboardContainer";
import Screen from "@/components/Screen";

export default function CalculatorContainer() {
    const [display, setDisplay] = useState("");
    return (
        <>
        <Screen display={display}/>
        <KeyboardContainer setDisplay={setDisplay}/>
        </>
    )
}