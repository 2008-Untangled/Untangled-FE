import React, { useState, component } from "react";
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
import { postMemory } from "../apiCalls";

export default NewMemoryForm = ({
  room,
  createdMemory,
  setCreatedMemory,
  memoryMode,
  setMemoryMode,
  setCoordinatesSelected,
}) => {
  // return (
  //   <View style={styles.formContainer}>
  //     <Image
  //       style={styles.memoryImage}
  //       source={require("../../assets/icon.png")}></Image>
  //     <TextInput style={styles.inputField}></TextInput>
  //     <TextInput style={styles.inputField}></TextInput>
  //     <TextInput style={styles.inputField}></TextInput>
  //     <TouchableOpacity
  //       style={styles.button}
  //       onPress={() =>
  //         Alert.alert("You posted a new memory!")
  //       }></TouchableOpacity>
  //   </View>
  // );
  return (
    <View style={styles.formContainer}>
      <Image
        // source={{ uri: `${memory.image}` }}
        style={styles.memoryImage}></Image>
      <Text style={{ fontSize: 20 }}>Description:</Text>
      <TextInput
        style={styles.inputField}
        onChangeText={(text) => {
          setCreatedMemory({ ...createdMemory, description: text });
        }}>
        {createdMemory.description}
      </TextInput>
      <Text style={{ fontSize: 20 }}>Aromas:</Text>
      <TextInput
        style={styles.inputField}
        onChangeText={(text) => {
          setCreatedMemory({ ...createdMemory, aromas: text });
        }}>
        {createdMemory.aromas}
      </TextInput>
      <View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              // setUpdatedMemory({
              //   description: updatedDescriptionText,
              //   aromas: updatedAromaText,
              // });
              Alert.alert("the memory has been posted");
              setCoordinatesSelected(false);
              console.log(createdMemory, room.id);
              postMemory(room.id, createdMemory).then((data) =>
                console.log(data)
              );
            }}>
            <Text style={styles.button}>SUBMIT</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setMemoryMode(false);
              setCoordinatesSelected(false);
            }}>
            <Text style={styles.button}>CLOSE</Text>
          </TouchableOpacity>
        </View>
        <View>
          {/* <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => {
              displayDeleteConfirmation();
            }}>
            <Text styles={styles.deleteButtonText}>Delete Memory</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    display: "flex",
    backgroundColor: "grey",
    flex: 1,
    top: 300,
    left: 200,
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
    width: 300,
    height: 100,
  },
  memoryImage: {
    zIndex: 1,
    marginTop: 3,
    borderRadius: 20,
    width: 20,
    height: 20,
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
