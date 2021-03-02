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
      <Text>CLICK ME</Text>
      <Modal presentationStyle="pageSheet" visible={modalVisible}>
        <TouchableOpacity
          style={{ height: 50, width: 50, position: "absolute", right: 100 }}
          onPress={() => {
            setEditMode(true);
          }}
        >
          <Text>Click to edit</Text>
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

              <Text style={styles.textStyle}>Test: {memory.aromas}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
                setSelectedMemory(null);
              }}
            >
              <Text style={styles.hideButton}>Go Back</Text>
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
    borderColor: "blue",
    alignContent: "space-around",
    alignItems: "center",
    width: 150,
    height: 150,
  },
  memoryImage: {
    position: "absolute",
    width: 300,
    height: 300,
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
    top: 400,
  },
  textStyle: {
    fontSize: 30,
  },
  hideButton: {
    fontSize: 100,
    borderColor: "lime",
    borderRadius: 15,
    borderWidth: 20,
    top: 700,
  },
});
