import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Button } from "react-native-paper";

export default Room = (props) => {
  const buttonPress = () => {
    props.navigation.navigate("Memory");
  };

  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          buttonPress();
        }}
        style={{ margin: 20 }}
      >
        TO MEMORY
      </Button>
      <Image
        source={require("../../assets/backdrops/livingroom.png")}
        style={{ width: "90%", height: "90%" }}
      ></Image>
      <StatusBar style="auto" />
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
