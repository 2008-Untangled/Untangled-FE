import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";
import { getAllRooms } from "../apiCalls";
import Overview from "../Overview/Overview";

export const HomePage = ({ navigation }) => {
  const [allRooms, setAllRooms] = useState([]);

  useEffect(() => {
    console.log("This fucking works");
  }, [allRooms]);

  const resolveGetAllRooms = async () => {
    await getAllRooms(1)
      .then((data) => setAllRooms(data.data))
      .catch((error) => console.error(error));
  };

  const handlePress = () => {
    // debugger;
    console.log(navigation);
    console.log("hello");
    resolveGetAllRooms();
    // console.log(allRooms);
    // <Overview rooms={allRooms} />;
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          // <Overview rooms={allRooms} />;
          handlePress();
          navigation.navigate("Overview", { name: "Overview" });
        }}>
        <Image source={require("../../assets/backdrops/homefront.png")} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
