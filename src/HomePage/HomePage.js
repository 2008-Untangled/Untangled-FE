import React, { Component } from "react";
import { View, Image, TouchableOpacity, StyleSheet, Text } from "react-native";
import { getAllRooms } from "../apiCalls";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
    };
  }
  resolvedRooms = async () => {
    await getAllRooms(1)
      .then((data) => this.setState({ rooms: data.data }))
      .then(() =>
        this.props.navigation.navigate("Overview", { rooms: this.state.rooms })
      )
      .catch((error) => console.error(error));
  };

  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.resolvedRooms();
          }}
        >
          <Image
            source={require("../../assets/logolarge.png")}
            style={ styles.logo }
          />
          <Image
            source={require("../../assets/backdrops/homefront.png")}
            style={{ width: "100%", height: "100%" }}
            testID="homeFront"
          />
          <Text style={styles.textStyle}>TAP ANYWHERE</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    display: "flex",
    position: "absolute",
    zIndex: 7,
    flex: 1,
    marginTop: 100,
    alignSelf: "center",
  },
  textStyle: {
    position: "absolute",
    zIndex: 7,
    flex: 1,
    bottom: 150,
    alignSelf: "center",
    fontSize: 28,
    fontWeight: "bold",
    color: "#515c2e",
    borderColor: "#e1a555",
    borderWidth: 5,
    padding: 10,
    borderRadius: 20,
  },
});

export default HomePage;
