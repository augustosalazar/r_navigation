import { StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { Appbar } from "react-native-paper";
import * as React from "react";

export function Page2() {
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
          This is the second page.
        </Text>
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
