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
  TextInput,
  Alert,
} from "react-native";
import { editMemory, deleteMemory } from "../apiCalls";
// import { TextInput } from 'react-native-paper';

// Edit is clicked from within a memory
// Flip a bool in Memory when edit mode is activated and
// form will render instead of static memory

export default MemoryForm = ({
  memory,
  setSelectedMemory,
  setModalVisible,
  modalVisible,
  setEditMode,
  editMode,
  memoryUpdatedBool,
  setMemoryUpdatedBool,
}) => {
  const [updatedDescriptionText, setUpdatedDescriptionText] = useState(
    memory.description
  );
  const [updatedAromaText, setUpdatedAromaText] = useState(memory.aromas);
  const [updatedMemory, setUpdatedMemory] = useState({});

  useEffect(() => {
    if (Object.keys(updatedMemory).length) {
      editMemory(memory.id, updatedMemory);
      setSelectedMemory(null);
      setModalVisible(!modalVisible);
    }
  }, [updatedMemory, modalVisible]);

  const displayDeleteConfirmation = () => {
    Alert.alert(
      "Delete This Memory?",
      "Are you sure you want to delete this memory?",
      [
        {
          text: "NO",
          onPress: () => console.warn("NO Pressed"),
          style: "cancel",
        },
        {
          text: "YES",
          onPress: () => {
            deleteMemory(memory.id)
              .then((data) => console.log(data))
              .catch((error) => console.log(error));
            setModalVisible(!modalVisible);
          },
        },
      ]
    );
  };

  return (
    <View style={styles.formContainer}>
      <Image
        source={{ uri: `${memory.image}` }}
        style={styles.memoryImage}></Image>
      <Text style={{ fontSize: 20 }}>Description:</Text>
      <TextInput
        style={styles.inputField}
        onChangeText={(text) => {
          setUpdatedDescriptionText(text);
        }}>
        {memory.description}
      </TextInput>
      <Text style={{ fontSize: 20 }}>Aromas:</Text>
      <TextInput
        style={styles.inputField}
        onChangeText={(text) => {
          setUpdatedAromaText(text);
        }}>
        {memory.aromas}
      </TextInput>
      <View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              setUpdatedMemory({
                description: updatedDescriptionText,
                aromas: updatedAromaText,
              });
            }}>
            <Text style={styles.button}>SUBMIT</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setEditMode(!editMode);
            }}>
            <Text style={styles.button}>BACK TO MEMORY</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => {
              displayDeleteConfirmation();
            }}>
            <Text styles={styles.deleteButtonText}>Delete Memory</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "space-between",
    alignItems: "center",
    zIndex: 7,
    borderColor: "red",
    fontSize: 20,
  },
  inputField: {
    marginTop: 3,
    display: "flex",
    flexWrap: "wrap",
    textAlign: "justify",
    borderStyle: "solid",
    borderColor: "#b5b7b3",
    height: 100,
    width: "80%",
    fontSize: 45,
    borderWidth: 5,
    flexShrink: 1,
    backgroundColor: "#D3D3D3",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
  },
  button: {
    textAlign: "center",
    margin: 5,
    padding: 5,
    fontSize: 50,
    fontWeight: "bold",
    color: "#515c2e",
    borderColor: "#e1a555",
    borderWidth: 5,
    borderRadius: 20,
  },
  memoryImage: {
    zIndex: 1,
    marginTop: 3,
    borderRadius: 20,
    width: 400,
    height: 400,
  },
  deleteButton: {
    textAlign: "center",
    margin: 5,
    padding: 5,
    fontSize: 50,
    fontWeight: "bold",
    backgroundColor: "red",
    borderColor: "black",
    borderWidth: 5,
    borderRadius: 20,
  },
  deleteButtonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
  },
});
