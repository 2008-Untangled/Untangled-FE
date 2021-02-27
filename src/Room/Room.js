import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";
import { getRoom, getMemories } from "../apiCalls";

export default function Room(props) {
  const selectedRoom = props.route.params.id;

  const [room, setRoom] = useState({});
  const [memories, setMemories] = useState([]);

  useEffect(() => {
    getSelectedRoom();
    getRoomMemories();
  }, []);

  const getSelectedRoom = async () => {
    //  console.log(selectedRoom);
    await getRoom(selectedRoom)
      .then((data) => setRoom(data.data))
      .then(() => {
        // console.log(room);
      })

      .catch((error) => console.error(error));
  };

  const getRoomMemories = async () => {
    await getMemories(selectedRoom)
      .then((data) => console.log(data.data))
      // .then((data) => {
      //   console.log("A", data);
      // })

      .catch((error) => console.error(error));
  };

  return (
    <View style={styles.container}>
        <Text>Hopefully a room appears</Text>
        <Image
          source={{ uri: `${room.image}` }}
          style={{ width: 820, height: 1180 }}
        />
        <TouchableOpacity
        style={styles.button}
        onPress={() => {
          console.log("I've been pressed!")
          return (<Memory selectedMemory={memories[0]}  />)
        }}
        >
          
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: -1,
    display: "flex",
    backgroundColor: "#fff",
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    zIndex: 2,
    position: "absolute",
    borderWidth: 4,
    borderColor: "red",
    width: 300,
    height: 300,
  }
});
