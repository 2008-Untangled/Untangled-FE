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
import { Divider } from "react-native-paper";

const Memory = (props) => {
  const { id } = props.id;
  const { location } = props.location;
  const { description } = props.description;
  const { image } = props.image;
  const { song } = props.song;
  const { aromas } = props.aromas;

  return (
    <View id={id} location={location} style={styles.container}>
      <Image source={require(`${image}`)}></Image>
      <Text> {description} </Text>
      <Text>{aromas}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
  },
});

export default Memory;
