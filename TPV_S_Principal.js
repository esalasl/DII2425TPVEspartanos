import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function TPV_S_Principal({ navigation }) {
  const mesas = [1, 2, 3, 4, 5, 6]; // Lista de mesas disponibles

  return (
    <View style={styles.container}>
      {/* Botón para acceder a otras opciones (no implementado aún) */}
      <TouchableOpacity style={styles.optionsButton} onPress={() => {}}>
        <Text style={styles.optionsText}>Opciones</Text>
      </TouchableOpacity>

      {/* Botones dinámicos para cada mesa */}
      {mesas.map((mesa) => (
        <TouchableOpacity
          key={mesa}
          style={styles.mesaButton}
          onPress={() => navigation.navigate("Opciones", { mesa })} // Navegar a opciones con número de mesa
        >
          <Text style={styles.mesaText}>Mesa {mesa}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  optionsButton: {
    backgroundColor: "#FFA500",
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  optionsText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  mesaButton: {
    padding: 10,
    backgroundColor: "#00bb2d",
    marginVertical: 5,
    borderRadius: 5,
    width: 150,
    alignItems: "center",
  },
  mesaText: {
    color: "#fff",
    fontSize: 18,
  },
});
