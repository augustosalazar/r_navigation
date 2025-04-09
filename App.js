import { NavigationContainer } from "@react-navigation/native";
import { Page1 } from "./components/Page1";
import { Page2 } from "./components/Page2";
import { PaperProvider } from "react-native-paper";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Page1">
          <Stack.Screen name="Page1" component={Page1} options={{ title: 'Welcome to this app' }} />
          <Stack.Screen name="Page2" component={Page2} options={{ title: 'Overview' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
