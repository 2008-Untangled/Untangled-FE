// {
//   id: <int>,
//   description: <string>,
//   image: <string>,
//   song: <string>,
//   aromas: <str>,
//   location: <string>,
//   }

import React from "react";

import { StyleSheet, Text, View } from "react-native";

const Memory = (props) => {
  const { id } = props.id;
  const { location } = props.location;
  const { description } = props.description;
  const { image } = props.image;
  const { song } = props.song;
  const { aromas } = props.aromas;

  return (
    <View>
      <Image source={require(`${image}`)}></Image>
      <Text> </Text>
    </View>
  );
};

export default Memory;
