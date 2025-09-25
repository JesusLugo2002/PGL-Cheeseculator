import { myColors } from "@/components/styles/Colors";
import { useState } from "react";
import { StyleSheet, Text, View, Switch } from "react-native";

export default function Index() {
  const [theme, useTheme] = useState("light");
  return (
    <View
      style={theme === "light" ? styles.container : [styles.container, {backgroundColor: myColors.dark}]}
    >
      <Switch value={theme === "light"} onValueChange={() => useTheme(theme === "light" ? "dark" : "light")}></Switch>
      <Text>Pantalla</Text>
      <Text>Botones</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: myColors.white
  }
})
