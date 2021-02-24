import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { HomePage } from "../HomePage/HomePage";
import Button from "../UI/Button";

export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <HomePage />
      <View style={styles.container}>
        <Text style={styles.text}>This will be overview</Text>
        <Button
          title='Go to Room'
          onPress={() =>
            navigation.navigate("Room", { name: "Room" })
          }></Button>
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
    fontSize: 60,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
});

const RoomView = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Room />
    </View>
  );
};
