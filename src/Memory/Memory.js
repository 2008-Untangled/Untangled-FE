import React from "react";
import { StyleSheet, Text, View, Image, Modal } from "react-native";
// import Modal from "../UI/Modal";

export default Memory = ({ memory }) => {
  return (
    <View style={styles.container}>
      <Text>MEMORY</Text>
      <Modal >
        <Image source={{ uri: `${memory.image}` }}></Image>
        <Text>{memory.description}</Text>
        <Text>{memory.aromas}</Text>
      </Modal>
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
