import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import * as React from "react";

export function Page2({ route, navigation }) {
  const { name } = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          mode="text"
          onPress={() => {
            // Handle logout logic here
            console.log("Logout pressed");
            navigation.reset({
              index: 0,
              routes: [{ name: "Page1" }]
            });
          }}
        >
          Logout
        </Button>
      )
    });
  }, [navigation, name]);

  return (
    <View
      style={{
        flex: 1
      }}
    >
      <View style={styles.container}>
        <Text style={{ marginBottom: 20 }}>
          You have successfully navigated to this page
        </Text>
        <Text style={{ marginBottom: 20 }}>Do you want option A or B</Text>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Button
            mode="contained"
            onPress={() => {
              console.log("Option A pressed");
              navigation.navigate("Page3a", {
                name: name
              });
            }}
          >
            Option A
          </Button>

          <Button
            mode="contained"
            onPress={() => {
              console.log("Option B pressed");
              navigation.navigate("Page3b", {
                name: name
              });
            }}
          >
            Option B
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 20
  }
});
