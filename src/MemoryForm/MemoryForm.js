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
} from "react-native";
import { editMemory, deleteMemory } from "../apiCalls";
// import { TextInput } from 'react-native-paper';
import { Colors } from "react-native/Libraries/NewAppScreen";

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
}) => {
  const [updatedDescriptionText, setUpdatedDescriptionText] = useState(
    memory.description
  );
  const [updatedAromaText, setUpdatedAromaText] = useState(memory.aromas);
  const [updatedMemory, setUpdatedMemory] = useState({});
  // const [formVisible, setFormVisible] = useState(true);

  useEffect(() => {
    if (Object.keys(updatedMemory).length) {
      console.log("if there is a new memory", updatedMemory);
      editMemory(memory.id, updatedMemory);
      setSelectedMemory(null);
      setModalVisible(!modalVisible);
    }
  }, [updatedMemory]);

  return (
    <View style={styles.formContainer}>
      <Image
        source={{ uri: `${memory.image}` }}
        style={styles.memoryImage}></Image>
      <Text style={{ fontSize: 20 }}>Description:</Text>
      <TextInput
        style={styles.inputField}
        // multiline={true}
        // mode={"outlined"}
        // underlineColor="black"
        onChangeText={(text) => {
          setUpdatedDescriptionText(text);
          // setUpdatedMemory({description: updatedDescriptionText, aromas: updatedAromaText});
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
              deleteMemory(memory.id);
              setModalVisible(!modalVisible);
            }}>
            <Text>Delete Memory</Text>
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
});
