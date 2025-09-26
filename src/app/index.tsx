import { ThemeContext } from "@/context/ThemeContext";
import { myColors } from "@/styles/Colors";
import { styles } from "@/styles/GlobalStyles";
import { useState } from "react";
import { Text, View, Switch } from "react-native";

export default function Index() {
  const [theme, useTheme] = useState("light");
  return (
    <ThemeContext.Provider value={theme}>
      <View
        style={theme === "light" ? styles.container : [styles.container, {backgroundColor: myColors.dark}]}
      >
        <Switch value={theme === "light"} onValueChange={() => useTheme(theme === "light" ? "dark" : "light")}></Switch>
        <Text style={styles.buttonCheddar}>1</Text>
        <Text>Botones</Text>
      </View>
    </ThemeContext.Provider>
  );
}
