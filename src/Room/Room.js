import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { getRoom, getMemories } from "../apiCalls";
import Memory from "../Memory/Memory";
import NewMemoryForm from "../MemoryForm/NewMemoryForm";
import MemoryForm from "../MemoryForm/MemoryForm";

export default function Room(props) {
  const selectedRoom = props.route.params.id;

  const [room, setRoom] = useState({});
  const [memories, setMemories] = useState([]);
  const [selectedMemory, setSelectedMemory] = useState(null);
  const [memoryUpdatedBool, setMemoryUpdatedBool] = useState(false);
  const [memoryMode, setMemoryMode] = useState(false);
  const [coordinatesSelected, setCoordinatesSelected] = useState(false);
  const [createdMemory, setCreatedMemory] = useState({
    description: "",
    image: "",
    aromas: "",
    x: 0,
    y: 0,
  });

  const displayUpdateConfirmation = () => {
    console.log(memoryUpdatedBool, "actual function");
    Alert.alert(
      "Memory Updated!",
      "Your memory has been successfully updated!",
      [
        {
          text: "Okay",
          onPress: () => {
            console.warn("Okay Pressed");
            setMemoryUpdatedBool(!memoryUpdatedBool);
          },
        },
      ]
    );
  };

  useEffect(() => {
    if (memoryUpdatedBool) {
      displayUpdateConfirmation();
    }
  }, [memoryUpdatedBool]);

  const createMemories = (memories) => {
    if (memories.length > 0) {
      let memoryComponents = memories.map((memory) => {
        return (
          <TouchableOpacity
            testID={memory.id}
            key={memory.id}
            style={memoryStyles[memory.id]}
            onPress={() => {
              setSelectedMemory(memory.id);
            }}>
            <Image
              source={require("../../assets/thoughtBubble.png")}
              style={{ height: 150, width: 150 }}
            />
            {memoryUpdatedBool && displayUpdateConfirmation()}
            {selectedMemory === memory.id && (
              <Memory
                memory={memory}
                setSelectedMemory={setSelectedMemory}
                memoryUpdatedBool={memoryUpdatedBool}
                setMemoryUpdatedBool={setMemoryUpdatedBool}
              />
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
            // borderRadius: 75,
            // borderWidth: 4,
            // borderColor: "red",
            top: memory.y + 50,
            left: memory.x,
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
  }, [selectedMemory]);

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

  const createMemory = (event) => {
    // Add a memory to an object!
    // Press somewhere
    const newMemory = {};

    // console.log(
    //   "click!!!",
    //   event.nativeEvent.locationX,
    //   event.nativeEvent.locationY
    // );
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
    <View
    // style={{
    //   width: 1000,
    //   height: 1000,
    //   backgroundColor: "black",
    //   position: "absolute",
    //   border: 4,
    //   borderColor: "magenta",
    //   borderStyle: "solid",
    //   zIndex: 17,
    // }}
    // onPress={(event) => {
    // if (memoryMode) {
    //   setCreatedMemory({
    //     ...createdMemory,
    //     x: event.nativeEvent.locationX,
    //     y: event.nativeEvent.locationY,
    //   });
    //   setCoordinatesSelected(true);
    //   // setMemoryMode(false)
    //   // return <NewMemoryForm createdMemory={createdMemory}/>

    // logCoordinates(event);
    // }
    >
      {coordinatesSelected && (
        <NewMemoryForm
          // style={{ zIndex: 11, position: "absolute" }}
          room={room}
          createdMemory={createdMemory}
          setCreatedMemory={setCreatedMemory}
          memoryMode={memoryMode}
          setMemoryMode={setMemoryMode}
          setCoordinatesSelected={setCoordinatesSelected}
        />
      )}
      {/* <View style={styles.container}> */}
      <View style={stylesText.topContainer}>
        <Text style={stylesText.textStyle}>TAP CIRCLES TO VIEW MEMORIES</Text>
        <TouchableOpacity
          onPress={(event) => {
            setMemoryMode(true);
            createMemory(event);
          }}>
          <Image
            source={require("../../assets/plus.png")}
            style={{ width: 64, height: 64, top: 170 }}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={(event) => {
          if (memoryMode) {
            setCoordinatesSelected(true);
            setCreatedMemory({
              ...createdMemory,
              x: event.nativeEvent.locationX,
              y: event.nativeEvent.locationY,
            });
          }
        }}>
        <Image
          source={{ uri: `${room.image}` }}
          style={{ width: 820, height: 1180 }}
        />
      </TouchableOpacity>
      {memories && createMemories(memories)}
      {/* </View> */}
    </View>
  );
}

const stylesText = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    zIndex: 10,
    position: "absolute",
    margin: 20,
    width: 820,
    height: 1180,
  },
  topContainer: {
    display: "flex",
    flexDirection: "row",
    zIndex: 10,
    // position: "absolute",
    margin: 20,
  },
  textStyle: {
    zIndex: 7,
    flex: 1,
    top: 170,
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
4;
