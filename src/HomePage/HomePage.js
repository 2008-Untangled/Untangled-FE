import React, { Component } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { getAllRooms } from "../apiCalls";


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.buttonPress = this.buttonPress.bind(this);
  }

  buttonPress() {
    getAllRooms(1)
      .then((data) => setAllRooms(data.data))
      .catch((error) => console.error(error));
    this.props.navigation.navigate('Overview');
  }

  render() {
    return(
      <View>
        <TouchableOpacity
          onPress={() => {
            this.buttonPress()
          }}>
          <Image source={require("../../assets/backdrops/homefront.png")} />
        </TouchableOpacity>
      </View>
    )
  }
}

export default HomePage;
