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
import MemoryForm from "../MemoryForm/MemoryForm";

export default Memory = ({ memory, setSelectedMemory }) => {
  const [modalVisible, setModalVisible] = useState(true);
  const [editMode, setEditMode] = useState(false);

  return (
    <View style={styles.container}>
      <Modal presentationStyle="pageSheet" visible={modalVisible}>
        <TouchableOpacity
          title="Click to edit"
          onPress={() => {
            setEditMode(true);
          }}
        >
          <Text style={styles.edit}>Click HERE to edit</Text>
        </TouchableOpacity>
        {editMode ? (
          <MemoryForm memory={memory} />
        ) : (
          <View style={styles.modalView}>
            <Image
              source={{ uri: `${memory.image}` }}
              style={styles.memoryImage}
            ></Image>
            <View style={styles.textContainer}>
              <Text style={styles.textStyle}>{memory.description}</Text>

              <Text style={styles.textStyle}>{memory.aromas}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
                setSelectedMemory(null);
              }}
            >
              <Text style={styles.hideButton} title={"Press Me"}>
                GO BACK
              </Text>
            </TouchableOpacity>
          </View>
        )}
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
  edit: {
    fontSize: 25,
    display: "flex",
    justifyContent: "flex-start",
    marginTop: 15,
    marginBottom: 5,
    fontWeight: "bold",
    textAlign: "center",
    color: "#515c2e",
  },
  memoryImage: {
    zIndex: 1,
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
    flex: 1,
    position: "absolute",
    justifyContent: "center",
    alignContent: "center",
    top: 650,
    width: "90%",
    marginRight: 3,
    marginLeft: 3,
  },
  textStyle: {
    fontSize: 25,
    marginBottom: 3,
  },
  hideButton: {
    marginTop: 3,
    padding: 5,
    position: "relative",
    fontSize: 50,
    fontWeight: "bold",
    color: "#515c2e",
    borderColor: "#e1a555",
    borderWidth: 5,
    borderRadius: 20,
    bottom: -750,
  },
});
