import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TPV_S_Principal from "./TPV_S_Principal";
import Opciones_S from "./Opciones_S";
import Insertar from "./Insertar";
import OpcionesCategoria from "./OpcionesCategoria";
import {ComandaProvider} from "./AlmacenDatos"


const Stack = createStackNavigator();

export default function App() {
  return (
    <ComandaProvider>
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
     
        <Stack.Screen
          name="Insertar"
          component={Insertar}
          options={{ title: "Insertar" }}
        />
        <Stack.Screen
          name="OpcionesCategoria"
          component={OpcionesCategoria}
          options={{ title: "Opciones de Categoría" }}
        />

      </Stack.Navigator>
    </NavigationContainer>
    </ComandaProvider>
  );
}
