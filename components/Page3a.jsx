import { StyleSheet, Text, View } from "react-native";
import { Button, Portal, Modal } from "react-native-paper";
import * as React from "react";

export function Page3a({ route, navigation }) {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const handleLikeCandy = () => {
    console.log("I like candy");
    hideModal();
  };

  const handleDislikeCandy = () => {
    console.log("I dont like candy");
    hideModal();
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={{ marginBottom: 20 }}>Bottom Sheet Modal</Text>
        <Text style={{ marginBottom: 20 }}>Give me candy</Text>
        <Button mode="contained" onPress={showModal}>
          Show Bottom Sheet Modal
        </Button>
      </View>

      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.bottomSheetStyle}
        >
          <Text style={{ marginBottom: 20, fontSize: 16, fontWeight: "500" }}>
            Choose an option
          </Text>
          <Button
            mode="outlined"
            onPress={handleLikeCandy}
            style={styles.optionButton}
          >
            I like candy
          </Button>
          <Button
            mode="outlined"
            onPress={handleDislikeCandy}
            style={styles.optionButton}
          >
            I dont like candy
          </Button>
        </Modal>
      </Portal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  optionButton: {
    marginVertical: 5,
  },
  bottomSheetStyle: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
});
