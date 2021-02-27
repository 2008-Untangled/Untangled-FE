import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";
import { getRoom, getMemories } from "../apiCalls";

export default function Room(props) {
  const selectedRoom = props.route.params.id;
  console.log(props.route.params.id);

  const [room, setRoom] = useState({});

  useEffect(() => {
    getSelectedRoom();
    console.log(room);
  }, []);

  const getSelectedRoom = async () => {
    await getRoom(selectedRoom)
      .then((data) => setRoom(data.data))
      .then((response) => {
        console.log(room);
      })

      .catch((error) => console.error(error));
  };

  //  getRoomMemories = async () => {
  //    await getMemories(selectedRoom)
  //      .then((data) => console.log(data))
  //      .then((response) => {
  //        console.log(response);
  //      })

  //      .catch((error) => console.error(error));
  //  };
  console.log(room.image)
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>Hopefully a room appears</Text>
        <Image
          source={{ uri: `${room.image}` }}
          style={{ width: 400, height: 400 }}
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
