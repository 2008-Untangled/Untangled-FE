import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Overview = (props) => {
  let rooms = props.map((room) => {
    return (
      // Some shit to do with room
      <View>
        <Text>LIVING ROOM</Text>
      </View>
    );
  });

  return <View style={styles.container}>{rooms}</View>;
};

export default Overview;

const styles = StyleSheet.create({
  container: {
    display: "grid",
    // grid not supported for react native so....
  },
});
