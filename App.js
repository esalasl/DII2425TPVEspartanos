import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TPV_S_Principal from "./TPV_S_Principal";
import Opciones_S from "./Opciones_S";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Mesas">
        <Stack.Screen
          name="Mesas"
          component={TPV_S_Principal}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Opciones"
          component={Opciones_S}
          options={{ title: "Opciones" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
