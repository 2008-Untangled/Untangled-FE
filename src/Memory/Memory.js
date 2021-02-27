import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default Memory = ({ memory }) => {
  return (
    <View style={styles.container}>
      <Text>MEMORY</Text>
      {console.log(memory.image)}
      <Image source={{ uri: `${memory.image}` }} style={styles.memoryImage}></Image>
      {/* <Text> {description} </Text>
      <Text>{aromas}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 3,
    position: "absolute",
    display: "flex",
    flex: 1,
    borderColor: "blue",
    justifyContent: "center",
    width: 300,
    height: 300,
  },
  memoryImage: {
    zIndex: 5,
    position: "absolute",
    flex: 1,
    width: 300,
    height: 300,
  },
});
