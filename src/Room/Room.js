import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { getRoom, getMemories } from "../apiCalls";
import  Memory  from "../Memory/Memory";

export default function Room(props) {
  const selectedRoom = props.route.params.id;

  const [room, setRoom] = useState({});
  const [memories, setMemories] = useState([]);
   const [memoryIsSelected, setMemoryAsSelected] = useState(false);

  useEffect(() => {
    getSelectedRoom();
    getRoomMemories();
  }, []);

  const getSelectedRoom = async () => {
    await getRoom(selectedRoom)
      .then((data) => setRoom(data.data))
      .then(() => {
      })

      .catch((error) => console.error(error));
  };

  const getRoomMemories = async () => {
    await getMemories(selectedRoom)
      .then((data) => setMemories(data.data))
      .then((data) => console.log(memories))
      .catch((error) => console.error(error));
  };

  return (
    <TouchableOpacity
      onPress={(event) =>
        console.log(event.nativeEvent.locationX, event.nativeEvent.locationY)
      }
      style={styles.container}
    >
      <Text>Hopefully a room appears</Text>
      <Image
        source={{ uri: `${room.image}` }}
        style={{ width: 820, height: 1180 }}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setMemoryAsSelected(true);
        }}
      >
        {memoryIsSelected && <Memory memory={memories[0]} />}
      </TouchableOpacity>
    </TouchableOpacity>
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
    bottom: 200,
    left: 60,
    width: 300,
    height: 300,
  },
});
