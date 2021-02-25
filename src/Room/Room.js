import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default Room = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Living Room</Text>
      <Image
        source={require("../../assets/backdrops/livingroom.png")}
        style={{ width: 100, height: 100 }}></Image>
      <StatusBar style='auto' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff",
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
});
