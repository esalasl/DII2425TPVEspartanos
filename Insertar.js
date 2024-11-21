import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

let uris = [
  { id: "Entrantes", url: "https://img.icons8.com/?size=100&id=xJ2BiIFB18j6&format=png&color=000000" },
  { id: "Primeros", url: "https://img.icons8.com/?size=100&id=8xDxt7XQuUhy&format=png&color=000000" },
  { id: "Segundos", url: "https://img.icons8.com/?size=100&id=YzUHQXiJaOmw&format=png&color=000000" },
  { id: "Postres", url: "https://img.icons8.com/?size=100&id=sWMIYVa4iz3d&format=png&color=000000" },
  { id: "Bebidas", url: "https://img.icons8.com/?size=100&id=hluDm3PqjTJn&format=png&color=000000" },
];


export default function Insertar({ navigation }) {

  return (
    <View style={styles.container}>
      {/* Título de la pantalla */}
      <Text style={styles.title}>Seleccione una categoría</Text>
      <View style={styles.grid}>
        {/* map para crear y colocar la imagen al boton*/}
        {uris.map((item) =>
        (<TouchableOpacity key={item.id} style={styles.button}
          onPress={() => navigation.navigate("OpcionesCategoria",{categoria :item.id} )}> {/* se le pasa el parametro categoria con valor id */}

          <Image style={styles.img} src={item.url} />
          <Text style={styles.text}> {item.id}</Text>
        </TouchableOpacity>
        ))}
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
  img: {
    height: 50, // se le ajustó una medida 
    width: 50   // a la imagen para que pueda ser visualizada.
  },
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
    backgroundColor: "#00bb2d",
    margin: 10,
    borderRadius: 8,
    width: 107,
    alignItems: "center",
  },
  text: {
    color: "black",
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