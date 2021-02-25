import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default Memory = (props) => {
  // const { id } = props.id;
  // const { location } = props.location;
  // const { description } = props.description;
  // const { image } = props.image;
  // const { song } = props.song;
  // const { aromas } = props.aromas;

  return (
    <View style={styles.container}>
      <Text>MEMORY</Text>
      {/* <Image source={require(`${image}`)}></Image>
      <Text> {description} </Text>
      <Text>{aromas}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
  },
});


