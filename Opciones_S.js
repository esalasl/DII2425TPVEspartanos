import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import OpcionesMesas_S from "./VistaOpcionesMesa";

export default function Opciones_S({ route, navigation }) {
  const { mesa } = route.params || { mesa: "sin información" };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Opciones para la mesa {mesa}</Text>
      <OpcionesMesas_S />
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.text}>Volver</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    padding: 19,
    margin: 65,
    backgroundColor: "red",
    borderRadius: 8
  },
  text: { color: "white" },
});
