import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TPV_S_Principal from "./TPV_S_Principal";
import Opciones_S from "./Opciones_S";
import Insertar from "./Insertar";
import OpcionesCategoria from "./OpcionesCategoria";

const Stack = createStackNavigator();

export default function App() {
  return (
    // Configuración del contenedor de navegación
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Mesas">
        {/* Pantalla principal: lista de mesas */}
        <Stack.Screen
          name="Mesas"
          component={TPV_S_Principal}
          options={{ headerShown: false }}
        />
        {/* Pantalla de opciones para la mesa seleccionada */}
        <Stack.Screen
          name="Opciones"
          component={Opciones_S}
          options={{ title: "Opciones" }}
        />
        {/* Pantalla de inserción de categorías */}
        <Stack.Screen
          name="Insertar"
          component={Insertar}
          options={{ title: "Insertar" }}
        />
         {/* Pantalla de opciones de la categoría seleccionada (Entrantes, Primeros, ...) */}
        <Stack.Screen
          name="OpcionesCategoria"
          component={OpcionesCategoria}
          options={{ title: "Opciones de Categoría" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
