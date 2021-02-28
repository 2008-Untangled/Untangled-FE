import React, { useState } from "react";
import { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  Button,
  Pressable,
  TouchableOpacity,
  Touchable,
} from "react-native";
// import Modal from "../UI/Modal";

export default Memory = ({ memory, modalVisibility, setSelectedMemory }) => {
  console.log(modalVisibility);
  const [modalVisible, setModalVisible] = useState(modalVisibility);

  return (
    <View style={styles.container}>
      <Text>MEMORY</Text>
      <Modal presentationStyle='pageSheet' visible={modalVisible}>
        <View style={styles.modalView}>
          <Image
            source={{ uri: `${memory.image}` }}
            style={styles.memoryImage}></Image>
          <Text>{memory.description}</Text>
          <Text>{memory.aromas}</Text>
        </View>
        <TouchableOpacity
          style={[styles.button, styles.buttonClose]}
          onPress={() => {
            console.log("cam is a lil biotch");
            setModalVisible(!modalVisible);
            setSelectedMemory(null);
          }}>
          <Text style={styles.textStyle}>Hide Modal</Text>
        </TouchableOpacity>
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
    width: 150,
    height: 150,
  },
  memoryImage: {
    zIndex: 5,
    position: "absolute",
    flex: 1,
    width: 300,
    height: 300,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});
