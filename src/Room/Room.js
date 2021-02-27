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
    await getRoom(selectedRoom)
      .then((data) => setRoom(data.data))
      .then(() => {
        console.log(room);
      })

      .catch((error) => console.error(error));
  };

  const getRoomMemories = async () => {
    await getMemories(selectedRoom)
      .then((data) => setMemories(data.data))
      .then(() => {
        console.log(memories);
      })

      .catch((error) => console.error(error));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>Hopefully a room appears</Text>
        <Image
          source={{ uri: `${room.image}` }}
          style={{ width: 820, height: 1180 }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff",
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
});
