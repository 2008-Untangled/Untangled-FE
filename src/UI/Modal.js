import * as React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Modal, Portal, Text, Button, Provider } from "react-native-paper";

const MyComponent = (props) => {
  const [visible, setVisible] = React.useState(true);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };

  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}>
          <Text>{props.description}</Text>
          <Text>{props.aromas}</Text>
        </Modal>
      </Portal>

      {/* <Button style={{ marginTop: 30 }} onPress={showModal}>
        Show
      </Button> */}
    </Provider>
  );
};

export default MyComponent;
