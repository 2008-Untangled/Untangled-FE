import React, { useState } from "react";
import { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";


// Edit is clicked from within a memory
// Flip a bool in Memory when edit mode is activated and
// form will render instead of static memory


export default Form = () => {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <Form style={styles.formContainer}>
      <Text >
        Stuff and things.
      </Text>
    </Form>
  )
}

const styles = StyleSheet.create({
  formContainer: {
    zIndex: 7,
    borderColor: "red",
    fontSize: 20,
  }
})