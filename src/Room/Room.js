import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { getRoom, getMemories } from "../apiCalls";
import Memory from "../Memory/Memory";

export default function Room(props) {
  const selectedRoom = props.route.params.id;

  const [room, setRoom] = useState({});
  const [memories, setMemories] = useState([]);
  const [selectedMemory, setSelectedMemory] = useState(null);

  const createMemories = () => {
    if (memories.length > 0) {
      let memoryComponents = memories.map((memory) => {
        return (
          <TouchableOpacity
            key={memory.id}
            style={memoryStyles[memory.id]}
            onPress={() => {
              setSelectedMemory(memory.id);
            }}>
            {selectedMemory === memory.id && <Memory memory={memory} />}
          </TouchableOpacity>
        );
      });
      return memoryComponents;
    }
  };

  const createMemoryStyles = () => {
    if (memories.length <= 0) {
      return;
    } else {
      let memoryCoordinates = memories.reduce((memoryCoordinates, memory) => {
        if (!memoryCoordinates[memory.id]) {
          memoryCoordinates[memory.id] = {
            zIndex: 2,
            position: "absolute",
            borderRadius: 100,
            borderWidth: 4,
            borderColor: "red",
            bottom: memory.y,
            right: memory.x,
            width: 300,
            height: 300,
          };
        }
        return memoryCoordinates;
      }, {});
      console.log(memoryCoordinates);
      return memoryCoordinates;
    }
  };

  useEffect(() => {
    getSelectedRoom();
    getRoomMemories();
  }, []);

  const getSelectedRoom = async () => {
    await getRoom(selectedRoom)
      .then((data) => setRoom(data.data))
      .then(() => {})

      .catch((error) => console.error(error));
  };

  const getRoomMemories = async () => {
    await getMemories(selectedRoom)
      .then((data) => setMemories(data.data))
      .then((data) => console.log(memories))
      .catch((error) => console.error(error));
  };

  const styles = StyleSheet.create({
    container: {
      zIndex: -1,
      display: "flex",
      backgroundColor: "#fff",
      fontWeight: "bold",
      alignItems: "center",
      justifyContent: "center",
    },
  });

  const memoryStyles = StyleSheet.create(createMemoryStyles());

  return (
    <TouchableOpacity
      onPress={(event) =>
        console.log(event.nativeEvent.locationX, event.nativeEvent.locationY)
      }
      style={styles.container}>
      <Text>Hopefully a room appears</Text>
      <Image
        source={{ uri: `${room.image}` }}
        style={{ width: 820, height: 1180 }}
      />
      {memories && createMemories()}
    </TouchableOpacity>
  );
}
