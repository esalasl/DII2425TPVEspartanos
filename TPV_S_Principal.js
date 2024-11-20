import React from "react";
import { View, Text, TouchableOpacity, StyleSheet,Pressable, onPressFunction, Image } from "react-native";

export default function TPV_S_Principal({ navigation }) {
  const mesas = [1, 2, 3, 4, 5, 6]; // Lista de mesas disponibles

  return (
    <View style={styles.container}>
      {/* Botón para acceder a otras opciones (no implementado aún) */}
      <TouchableOpacity style={styles.optionsButton} onPress={() => { }}>
        <Text style={styles.optionsText}>Opciones</Text>
      </TouchableOpacity>

      {/* Botones dinámicos para cada mesa */}
      <View style={styles.grid} >
        {mesas.map((mesa , index) => (
        <Pressable onPress={() => navigation.navigate("Opciones",{ mesa })}>
          {/*<Text style={styles.optionsTextImg}>Mesa {index+1} </Text> titulo */}
        <Image
          style={{
            width: 70,
            height: 70,
          }}
          source={
            require('./imagenes/imagen3.png')
          }
        />
      </Pressable>
      ))}
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
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 20,
    gap: 0,
    justifyContent: "space-around", // Espacio equitativo entre los botones
    width: "100%", // Limitar el ancho de los botones
    marginVertical: 10, // Margen entre los botones y los demás elementos
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
  optionsTextImg: {
    color: "Black",
    fontSize: 18,
    fontWeight: "bold",
  },
  mesaButton: {
    padding: 10,
    backgroundColor: "#4CAF50",
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
