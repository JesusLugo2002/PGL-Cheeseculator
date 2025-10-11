import CalculatorContainer from "@/containers/CalculatorContainer";
import { ThemeContext } from "@/context/ThemeContext";
import { myColors } from "@/styles/Colors";
import { styles } from "@/styles/GlobalStyles";
import { useState } from "react";
import { Switch, View } from "react-native";

export default function Index() {
  const [theme, useTheme] = useState("light");
  const isThemeLight = theme === "light";
  const mainTheme = isThemeLight ? styles.container : [styles.container, {backgroundColor: myColors.dark}]
  return (
    <ThemeContext.Provider value={theme}>
      <View style={mainTheme}>
        <Switch value={isThemeLight} onValueChange={() => useTheme(isThemeLight ? "dark" : "light")}></Switch>
        <CalculatorContainer/>
      </View>
    </ThemeContext.Provider>
  );
}
