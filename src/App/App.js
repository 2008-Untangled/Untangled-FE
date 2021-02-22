import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
    <View style={styles.container}>
      <Text style={styles.text}>I love turtles</Text>
      <StatusBar style='auto' />
    </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    // flex: 2,
    // backgroundColor: "black",
    fontSize: 200,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
});
