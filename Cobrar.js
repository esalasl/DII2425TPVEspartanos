import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Cobrar({ route, navigation }) {
  const { producto } = route.params;  // Obtener el producto pasado desde Opciones_S
  
  // Estado para controlar la cantidad de partes en las que dividir la cuenta
  const [divisiones, setDivisiones] = useState(1); // Iniciar con 1 parte (sin división)
  
  // Calcular el precio por parte
  const precioPorParte = producto.precioTotal / divisiones;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Ventana de Cobranza</Text>
      </View>

      {/* Mostrar información del producto */}
      <View style={styles.productInfo}>
        <Text style={styles.textLabel}>Producto: {producto.nombre}</Text>
        <Text style={styles.textLabel}>Cantidad: {producto.cantidad}</Text>
        <Text style={styles.textLabel}>Precio Unitario: ${producto.precioUnitario.toFixed(2)}</Text>
        <Text style={styles.textLabel}>Precio Total: ${producto.precioTotal.toFixed(2)}</Text>
      </View>

      {/* Opciones de dividir la cuenta */}
      <View style={styles.divisionContainer}>
        <Text style={styles.textLabel}>Dividir entre {divisiones} parte(s)</Text>
        
        {/* Botón para subir el número de divisiones (más) */}
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => setDivisiones(divisiones + 1)}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        {/* Botón para bajar el número de divisiones (menos) */}
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => divisiones > 1 && setDivisiones(divisiones - 1)}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        {/* Mostrar el precio por parte */}
        <Text style={styles.textLabel}>Precio por parte: ${precioPorParte.toFixed(2)}</Text>
      </View>

      {/* Botón de regreso */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
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
    padding: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: "bold",
  },
  productInfo: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    width: "100%",
    alignItems: "flex-start",
  },
  textLabel: {
    fontSize: 18,
    marginBottom: 10,
  },
  divisionContainer: {
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#00bb2d",
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  backButton: {
    backgroundColor: "#FFA500",
    padding: 10,
    borderRadius: 5,
  },
  backText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});
