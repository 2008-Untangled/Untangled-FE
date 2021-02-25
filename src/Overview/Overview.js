import React from "react";
import { StyleSheet, Text, View} from "react-native";
import { Button } from "react-native-paper";

export default Overview = (props) => {
  // let rooms = props.map((room) => {
  //   return (
  //     // Some shit to do with room
  //     <View>
  //       <Text>LIVING ROOM</Text>
  //     </View>
  //   );
  // });
  const buttonPress = () => {
    props.navigation.navigate("Room");
  };

  return (
    <View style={styles.container}>
      <Text>OVERVIEW</Text>
      <Button
        onPress={() => {
          buttonPress();
        }}
      >
        To Room
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    // grid not supported for react native so....
  },
});
