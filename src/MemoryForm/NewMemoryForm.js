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

export default NewMemoryForm = ({ createdMemory }) => {
  return (
    <View style={styles.formContainer}>
      
      <TextInput style={styles.inputField}></TextInput>
      <TextInput style={styles.inputField}></TextInput>
      <TextInput style={styles.inputField}></TextInput>
      <TouchableOpacity
        onPress={() =>
          Alert.alert("You posted a new memory!")
        }></TouchableOpacity>
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
    position: "absolute",
    zIndex: 8,
    borderColor: "red",
    fontSize: 20,
    width: 500,
    height: 500,
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
