import { StyleSheet, Text, View } from "react-native";
import { Button, Snackbar } from "react-native-paper";
import * as React from "react";

export function Page3b() {
  // Separate state for each Snackbar
  const [bottomVisible, setBottomVisible] = React.useState(false);

  // Handlers for the bottom Snackbar
  const onToggleBottomSnackBar = () => setBottomVisible(!bottomVisible);
  const onDismissBottomSnackBar = () => setBottomVisible(false);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={{ marginBottom: 20 }}>
          This is a snackbar demo. Click below to see them in action.
        </Text>
        <View style={{ gap: 10 }}>
          <Button mode="contained" onPress={onToggleBottomSnackBar}>
            Show Bottom Snackbar
          </Button>
        </View>
      </View>
      <Snackbar
        duration={2000}
        visible={bottomVisible}
        onDismiss={onDismissBottomSnackBar}
        style={styles.snackbarBottom}
      >
        Hey there! I'm the bottom Snackbar.
      </Snackbar>
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
  snackbarTop: {
    position: "absolute",
    top: 0, // At the top of the screen
    left: 0,
    right: 0,
  },
  snackbarBottom: {
    position: "absolute",
    bottom: 0, // At the bottom of the screen
    left: 0,
    right: 0,
  },
});
