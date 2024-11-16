import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Opciones_S({ route, navigation }) {
  const { mesa } = route.params || { mesa: "sin información" };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Opciones para la mesa {mesa}</Text>
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
    alignItems: "center" },
  button: { padding: 10,
    backgroundColor: "red" },
  text: { color: "white" },
});
