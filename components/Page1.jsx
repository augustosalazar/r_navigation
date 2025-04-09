import { StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { Appbar } from "react-native-paper";
import * as React from "react";

export function Page1({ navigation }) {
  const [text, setText] = React.useState("");

  return (
    <View
      style={{
        flex: 1,
      }}
    >

      <View style={styles.container}>
        <Text style={{ fontSize: 20, marginBottom: 20 }}>
          Please enter your name and press the button below to continue.
        </Text>
        <TextInput
          label="Name"
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <Button mode="contained" onPress={() => navigation.navigate('Page2')}>
          Continue
        </Button>
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
