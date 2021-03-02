import React, { useState } from "react";
import { useEffect } from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  Button,
  TouchableOpacity,
} from "react-native";
// import Modal from "../UI/Modal";

export default Memory = ({ memory, setSelectedMemory }) => {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <View style={styles.container}>
      <Text>CLICK ME</Text>
      <Modal presentationStyle="pageSheet" visible={modalVisible}>
        <View style={styles.modalView}>
          <Image
            source={{ uri: `${memory.image}` }}
            style={styles.memoryImage}
          ></Image>
          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>{memory.description}</Text>

            <Text style={styles.textStyle}>Smells like: {memory.aromas}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(!modalVisible);
              setSelectedMemory(null);
            }}
          >
            <Text style={styles.hideButton} title={"Press Me"}>GO BACK</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignContent: "space-around",
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 150,
  },
  memoryImage: {
    marginTop: 3,
    borderRadius: 20,
    position: "absolute",
    width: 600,
    height: 600,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    display: "flex",
    alignContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  textContainer: {
    position: "absolute",
    top: 650,
  },
  textStyle: {
    fontSize: 30,
    marginBottom: 2,
  },
  hideButton: {
    marginTop: 3,
    padding: 5,
    position: "relative",
    fontSize: 50,
    color: "#fff",
    backgroundColor: "#e1a555",
    borderWidth: 5,
    bottom: -750,
  },
});
