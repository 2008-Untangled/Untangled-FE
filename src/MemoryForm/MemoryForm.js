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
import { editMemory } from "../apiCalls";


// Edit is clicked from within a memory
// Flip a bool in Memory when edit mode is activated and
// form will render instead of static memory


export default MemoryForm = ({memory}) => {
  const [updatedDescriptionText, setUpdatedDescriptionText] = useState(memory.description);
  const [updatedAromaText, setUpdatedAromaText] = useState(memory.aromas);
  const [updatedMemory, setUpdatedMemory] = useState({});
  const [modalVisible, setModalVisible] = useState(true);

  useEffect(() => {
    if (Object.keys(updatedMemory).length) {
      editMemory(memory.id, updatedMemory)
      .then(response => console.log(response))
    }
  }, [updatedMemory])

  return (
    <View style={styles.formContainer}>
      <Image source={{ uri: `${memory.image}` }} style={styles.memoryImage}></Image>
      <TextInput onChangeText={(text) => {
        setUpdatedDescriptionText(text);
        // setUpdatedMemory({description: updatedDescriptionText, aromas: updatedAromaText});
      }
      } 
        style={styles.inputField}>
        {memory.description}
      </TextInput>
      <TextInput onChangeText={(text) => {
        setUpdatedAromaText(text);
      }
      } 
        style={styles.inputField}>
        {memory.aromas}
      </TextInput>
      <Button onPress={()=> {
        setUpdatedMemory({description: updatedDescriptionText, aromas: updatedAromaText})
        // .then(() => console.log(updatedMemory))
        // console.log(updatedMemory);
        console.log("An API call happens here");
        // editMemory(memory.id, updatedMemory)
        // .then(response => console.log(response))
      }} title="submit button" style={styles.button}>Submit</Button>
    </View>       
  )
}

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
    fontSize: 50,
    borderWidth: 5,
    flexShrink: 1,
  },
  button: {
    backgroundColor: "#e1a555",
    borderRadius: 20,
    height: 20,
    width: 50,
  },
  memoryImage: {
    zIndex: 1,
    marginTop: 3,
    borderRadius: 20,
    width: 400,
    height: 400,
  },
});