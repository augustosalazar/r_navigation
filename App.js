import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Page1 } from "./components/Page1";
import { PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Page1 />
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
