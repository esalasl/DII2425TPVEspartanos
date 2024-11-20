import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Insertar({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Título de la pantalla */}
      <Text style={styles.title}>Seleccione una categoría</Text>

      {/* Botones de categorías organizados en 3 columnas */}
      <View style={styles.grid}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate("OpcionesCategoria", { categoria: "Entrantes" })
          }
        >
          <Text style={styles.text}>Entrantes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate("OpcionesCategoria", { categoria: "Primeros" })
          }
        >
          <Text style={styles.text}>Primeros</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate("OpcionesCategoria", { categoria: "Segundos" })
          }
        >
          <Text style={styles.text}>Segundos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate("OpcionesCategoria", { categoria: "Postres" })
          }
        >
          <Text style={styles.text}>Postres</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate("OpcionesCategoria", { categoria: "Bebidas" })
          }
        >
          <Text style={styles.text}>Bebidas</Text>
        </TouchableOpacity>
      </View>

      {/* Botón para regresar a la pantalla anterior */}
      <View style={styles.backButtonContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>Volver</Text>
        </TouchableOpacity>
      </View>
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
    width: 100,
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  actionButtons: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
    width: "80%",
  },
  
  actionText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  backButtonContainer: {
    marginTop: 20,
    alignItems: "center",
    width: "100%",
  },
  backButton: {
    padding: 15,
    backgroundColor: "red",
    borderRadius: 8,
    width: 200,
    alignItems: "center",
  },
  backText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});
