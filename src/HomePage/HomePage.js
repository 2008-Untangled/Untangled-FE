import React, { Component } from "react";
import { View, Image, TouchableOpacity } from "react-native";
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
            source={require("../../assets/backdrops/homefront.png")}
            style={{ width: "100%", height: "100%" }}
            testID="homeFront"
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default HomePage;
