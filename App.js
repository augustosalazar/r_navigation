import { NavigationContainer } from "@react-navigation/native";
import { Page1 } from "./components/Page1";
import { Page2 } from "./components/Page2";
import { Page3a } from "./components/Page3a";
import { Page3b } from "./components/Page3b";
import { PaperProvider } from "react-native-paper";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Page1">
          <Stack.Screen
            name="Page1"
            component={Page1}
            options={{ title: "Welcome to this app" }}
          />
          <Stack.Screen
            name="Page2"
            component={Page2}
            options={({ route }) => ({
              title: `Helloo ${route.params.name}` // Dynamically set the title
            })}
          />
          <Stack.Screen
            name="Page3a"
            component={Page3a}
            options={({ route }) => ({
              title: `${route.params.name} Option A` // Dynamically set the title
            })}
          />
          <Stack.Screen
            name="Page3b"
            component={Page3b}
            options={({ route }) => ({
              title: `${route.params.name} Option B` // Dynamically set the title
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
