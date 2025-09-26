import Button from "@/components/Button";
import { ThemeContext } from "@/context/ThemeContext";
import { myColors } from "@/styles/Colors";
import { styles } from "@/styles/GlobalStyles";
import { useState } from "react";
import { Switch, View } from "react-native";

export default function Index() {
  const [theme, useTheme] = useState("light");
  return (
    <ThemeContext.Provider value={theme}>
      <View style={theme === "light" ? styles.container : [styles.container, {backgroundColor: myColors.dark}]}>
        <Switch value={theme === "light"} onValueChange={() => useTheme(theme === "light" ? "dark" : "light")}></Switch>
        <Button title="+" onPress={() => {alert("Sumando")}}/>
        <Button title="-" onPress={() => {alert("Restando")}}/>
        <Button title="x" onPress={() => {alert("Multiplicando")}}/>
        <Button title="÷" onPress={() => {alert("Dividiendo")}}/>
      </View>
    </ThemeContext.Provider>
  );
}
