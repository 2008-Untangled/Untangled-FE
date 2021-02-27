import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default Overview = ({ navigation, route }) => {
  let kitchen = route.params.rooms[0];
  let bedroom = route.params.rooms[1];
  let livingRoom = route.params.rooms[2];
  let backyard = route.params.rooms[3];

  const routeToRoom = (id) => {
    navigation.navigate("Room", { id: id });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          routeToRoom(kitchen.id);
        }}
      >
        <View style={styles.kitchen}>
          <Text style={styles.textKitchen}>{kitchen.name}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.stack}>
        <TouchableOpacity
          onPress={() => {
            routeToRoom(livingRoom.id);
          }}
        >
          <View style={styles.livingRoom}>
            <Text style={styles.text}>{livingRoom.name}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            routeToRoom(bedroom.id);
          }}
        >
          <View style={styles.bedroom}>
            <Text style={styles.text}>{bedroom.name}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          routeToRoom(backyard.id);
        }}
      >
        <View style={styles.backyard}>
          <Text style={styles.text}>{backyard.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    flexWrap: "wrap",
  },
  stack: {
    padding: 0,
    margin: 0,
  },
  text: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 28,
    marginTop: 135,
  },
  textKitchen: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 28,
    marginTop: 280,
  },
  kitchen: {
    borderRadius: 10,
    borderWidth: 5,
    borderStyle: "solid",
    borderColor: "white",
    backgroundColor: "#c55837",
    height: 600,
    width: 400,
  },
  livingRoom: {
    borderRadius: 10,
    borderWidth: 5,
    borderStyle: "solid",
    borderColor: "white",
    backgroundColor: "#e1a555",
    height: 300,
    width: 300,
  },
  bedroom: {
    borderRadius: 10,
    borderWidth: 5,
    borderStyle: "solid",
    borderColor: "white",
    backgroundColor: "#d99380",
    height: 300,
    width: 300,
  },
  backyard: {
    borderRadius: 10,
    borderWidth: 5,
    borderStyle: "solid",
    borderColor: "white",
    backgroundColor: "#768243",
    height: 300,
    width: 700,
  },
});
