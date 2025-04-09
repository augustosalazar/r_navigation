import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { Appbar } from "react-native-paper";
import * as React from "react";

export function Page1() {
  const [text, setText] = React.useState("");

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Appbar.Header>
        <Appbar.Content title="Welcome to this app!" />
      </Appbar.Header>

      <View style={styles.container}>
        <Text style={{ fontSize: 20, marginBottom: 20 }}>
          Please enter your name and press the button below to continue.
        </Text>
        <TextInput
          label="Email"
          value={text}
          onChangeText={(text) => setText(text)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    margin: 20,
  },
});
