import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomePage from '../HomePage/HomePage'
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <HomePage />
    // <View style={styles.container}>
    //   <Text style={styles.text}>Welcome Home!</Text>
    //   <StatusBar style='auto' />
    // </View>
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
    fontSize: 60,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
});
