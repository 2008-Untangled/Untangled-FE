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
            {selectedMemory === memory.id && (
              <Memory memory={memory} setSelectedMemory={setSelectedMemory} />
            )}
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
            borderRadius: 75,
            borderWidth: 4,
            borderColor: "red",
            top: memory.y - 50,
            left: memory.x - 75,
            width: 150,
            height: 150,
          };
        }
        return memoryCoordinates;
      }, {});
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
      .catch((error) => console.error(error));
  };

  const getRoomMemories = async () => {
    await getMemories(selectedRoom)
      .then((data) => setMemories(data.data))
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
    <View style={styles.container}>
      <Text style={stylesText.textStyle}>TAP CIRCLES TO VIEW MEMORIES</Text>
      <Image
        source={{ uri: `${room.image}` }}
        style={{ width: 820, height: 1180 }}
      />
      {memories && createMemories()}
    </View>
  );
}

const stylesText = StyleSheet.create({
  textStyle: {
    position: "absolute",
    zIndex: 7,
    flex: 1,
    top: 70,
    alignSelf: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "#515c2e",
    borderColor: "#e1a555",
    borderWidth: 5,
    padding: 10,
    borderRadius: 20,
  },
});
4