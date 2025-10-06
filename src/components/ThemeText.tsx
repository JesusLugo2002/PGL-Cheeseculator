import { ThemeContext } from "@/context/ThemeContext"
import { styles } from "@/styles/GlobalStyles";
import { useContext } from "react"
import { Text } from "react-native"

export default function ThemeText({children}: {children: React.ReactNode}) {
    const theme = useContext(ThemeContext);
    return (
        <>
            <Text style={theme === "light" ? styles.textDark : styles.textLight}>{children}</Text>
        </>
)
}