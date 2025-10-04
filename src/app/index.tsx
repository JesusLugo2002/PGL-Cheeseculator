import Button from "@/components/Button";
import Keyboard from "@/components/Keyboard";
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
        <Keyboard/>
      </View>
    </ThemeContext.Provider>
  );
}
