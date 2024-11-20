import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Opciones_S({ route, navigation }) {
  const { mesa } = route.params || { mesa: "sin información" }; // Número de la mesa recibida

  return (
    <View style={styles.container}>
      {/* Título que muestra el número de la mesa */}
      <Text style={styles.textTitle}>Opciones para la mesa {mesa}</Text>

      {/* Contenedor de botones de acción (en columna) */}
      <View style={styles.actionButtons}>
        {/* Botón Insertar */}
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => navigation.navigate("Insertar")}
        >
          <Text style={styles.textButton}>Insertar</Text>
        </TouchableOpacity>
        {/* Botón Comprobar */}
        <TouchableOpacity style={styles.buttons} onPress={() => {}}>
          <Text style={styles.textButton}>Comprobar</Text>
        </TouchableOpacity>
        {/* Botón Cobrar */}
        <TouchableOpacity style={styles.buttons} onPress={() => {}}>
          <Text style={styles.textButton}>Cobrar</Text>
        </TouchableOpacity>
      </View>

      {/* Botón para regresar a la pantalla de mesas */}
      <TouchableOpacity
        style={styles.buttonBack}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.text}>Volver</Text>
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
  textTitle: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: "bold",
    color: "black",
  },
  text: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: "bold",
    color: "white",
  },
  // Contenedor para los botones en columna
  actionButtons: {
    flexDirection: "column", // Cambiar a columna
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  buttons: {
    padding: 18,
    backgroundColor: "#4CAF50",
    marginVertical: 10, // Espaciado entre botones
    borderRadius: 13,
    width: 200, // Ancho de los botones
    alignItems: "center",
  },
  textButton: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonBack: {
    padding: 18,
    backgroundColor: "red",
    borderRadius: 13,
    width: 200, // Mismo tamaño que los otros botones
    alignItems: "center",
    marginTop: 20, // Espaciado respecto a los botones de acción
  },
});
