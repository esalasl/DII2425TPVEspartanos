import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function OpcionesCategoria({ route, navigation }) {
  const { categoria } = route.params || { categoria: "sin categoría" }; // Recibe la categoría seleccionada

  // Generar opciones dinámicamente basadas en la categoría
  const opciones = Array.from({ length: 6 }, (_, index) => `${categoria} ${index + 1}`);

  return (
    <View style={styles.container}>
      {/* Título de la categoría */}
      <Text style={styles.title}>Opciones para {categoria}</Text>

      {/* Botones de las opciones */}
      <View style={styles.grid}>
        {opciones.map((opcion, index) => (
          <TouchableOpacity key={index} style={styles.button} onPress={() => {}}>
            <Text style={styles.text}>{opcion}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Botones de acción (Continuar y Finalizar) */}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.continueButton} onPress={() => {}}>
          <Text style={styles.actionText}>Continuar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.finalizeButton} onPress={() => {}}>
          <Text style={styles.actionText}>Finalizar</Text>
        </TouchableOpacity>
      </View>

      {/* Botón para volver */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>Volver</Text>
      </TouchableOpacity>
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
  title: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: "bold",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 20,
  },
  button: {
    padding: 15,
    backgroundColor: "#4CAF50",
    margin: 10,
    borderRadius: 8,
    width: 120,
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  // Modificado para que los botones estén en fila
  actionButtons: {
    flexDirection: "row", // Cambié a row para que los botones estén uno al lado del otro
    justifyContent: "space-around", // Espacio equitativo entre los botones
    width: "80%", // Limitar el ancho de los botones
    marginVertical: 20, // Margen entre los botones y los demás elementos
  },
  continueButton: {
    padding: 15,
    backgroundColor: "#808080",
    borderRadius: 8,
    width: 150,
    alignItems: "center",
  },
  finalizeButton: {
    padding: 15,
    backgroundColor: "#808080",
    borderRadius: 8,
    width: 150,
    alignItems: "center",
  },
  backButton: {
    padding: 15,
    backgroundColor: "red",
    borderRadius: 8,
    width: 150,
    alignItems: "center",
  },
  backText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});
