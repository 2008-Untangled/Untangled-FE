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


// Edit is clicked from within a memory
// Flip a bool in Memory when edit mode is activated and
// form will render instead of static memory


export default MemoryForm = ({memory}) => {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <View style={styles.formContainer}>
      <Image source={{ uri: `${memory.image}` }} style={styles.memoryImage}></Image>
      <TextInput style={styles.inputField}>
        {memory.description}
      </TextInput>
      <TextInput style={styles.inputField}>
        {memory.aromas}
      </TextInput>
      <Button title="submit button">Submit</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  formContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "space-around",
    alignItems: "center",
    zIndex: 7,
    borderColor: "red",
    fontSize: 20,
  },
  inputField: {
    display: "flex",
    flexWrap: "wrap",
    textAlign: "justify",
    borderStyle: "solid",
    borderColor: "#fc6d47",
    height: 100,
    width: "80%",
    fontSize: 50,
    borderWidth: 5,
    flexShrink: 1,
  },
  button: {
    height: 20,
    width: 50,
  },
  memoryImage: {
    // zIndex: 7,
    // position: "absolute",
    width: 300,
    height: 300,
  }
})