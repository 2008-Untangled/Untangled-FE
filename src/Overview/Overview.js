import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default Overview = ({ navigation, route }) => {
  let kitchen = route.params.rooms[0];
  let livingRoom = route.params.rooms[1];
  let backyard = route.params.rooms[2];
  let bedroom = route.params.rooms[3];

  const routeToRoom = (id) => {
    navigation.navigate("Room", { id: id });
  };

  return (
    <View>
      <Text style={styles.title}>SELECT ANY ROOM TO EXPLORE</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    flexWrap: "wrap",
  },
  backup: {
    backgroundColor: "#FFFFFF",
  },
  title: {
    marginTop: 20,
    marginBottom: 20,
    alignSelf: "center",
    justifyContent: "center",
    textAlign: "center",
    fontSize: 30,
    fontStyle: "normal",
    color: "#515c2e",
    borderColor: "#e1a555",
    borderWidth: 5,
    width: "80%",
    padding: 10,
    borderRadius: 20,
    fontWeight: "bold",
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
    borderColor: "#FFFFFF",
    backgroundColor: "#c55837",
    height: 600,
    width: 400,
  },
  livingRoom: {
    borderRadius: 10,
    borderWidth: 5,
    borderStyle: "solid",
    borderColor: "#FFFFFF",
    backgroundColor: "#e1a555",
    height: 300,
    width: 300,
  },
  bedroom: {
    borderRadius: 10,
    borderWidth: 5,
    borderStyle: "solid",
    borderColor: "#FFFFFF",
    backgroundColor: "#d99380",
    height: 300,
    width: 300,
  },
  backyard: {
    borderRadius: 10,
    borderWidth: 5,
    borderStyle: "solid",
    borderColor: "#FFFFFF",
    backgroundColor: "#768243",
    height: 300,
    width: 700,
  },
});
