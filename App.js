import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { AsyncStorage, SafeAreaView, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";
import AmerenScreen from "./app/screens/AmerenScreen";
import HomeScreen from "./app/screens/HomeScreen";
import SpectrumScreen from "./app/screens/SpectrumScreen";
import WasteManagementScreen from "./app/screens/WasteManagementScreen";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen
            name="AmerenScreen"
            component={AmerenScreen}
            options={{ title: "Ameren Log In" }}
          />
          <Stack.Screen
            name="SpectrumScreen"
            component={SpectrumScreen}
            options={{ title: "Spectrum Log In" }}
          />
          <Stack.Screen
            name="WasteManagementScreen"
            component={WasteManagementScreen}
            options={{ title: "Waste Management Log In" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
