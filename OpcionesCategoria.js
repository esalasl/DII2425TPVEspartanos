import React, { useState } from "react";
import { Alert,View, Text, TouchableOpacity, StyleSheet, Image, Modal } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function OpcionesCategoria({ route, navigation }) {
  const { categoria } = route.params || { categoria: "sin categoría" }; // Recibe la categoría seleccionada

  let comidas = [];
// switch que le asigna las comidas dependiendo del tipo
switch(categoria){
case 'Entrantes':
 comidas = [
    { id: "Ensalada Caprese", url: "https://img.icons8.com/?size=100&id=yNIb9bxpGy9g&format=png&color=000000" },
    { id: "Patatas estilo Andaluz", url: "https://img.icons8.com/?size=100&id=liiPuvI1S4JC&format=png&color=000000" },
    { id: "Tartar de Tomate", url: "https://img.icons8.com/?size=100&id=BkWfN4ADvwXc&format=png&color=000000" },
    { id: "Empanadillas", url: "https://img.icons8.com/?size=100&id=zMZO9n0NVrlA&format=png&color=000000" },
    { id: "Tartar de atun rojo y aguacate", url: "https://img.icons8.com/?size=100&id=jRMjbPInVeXW&format=png&color=000000" },
  ];
  break;
case 'Primeros':
  comidas = [
    { id: "Guisantes con Jamon", url: "https://img.icons8.com/?size=100&id=yS57fEIJnYOs&format=png&color=000000" },
    { id: "Tomates Aliñados", url: "https://img.icons8.com/?size=100&id=BkWfN4ADvwXc&format=png&color=000000" },
    { id: "Ensalada de Mejillones", url: "https://img.icons8.com/?size=100&id=5yvWsBhzlXaU&format=png&color=000000" },
    { id: "Crema de zanahoria", url: "https://img.icons8.com/?size=100&id=26093&format=png&color=000000" },
    { id: "Ajo Blanco", url: "https://img.icons8.com/?size=100&id=uniKKe6fNM9J&format=png&color=000000" },
  ];
  break;
case 'Segundos':
  comidas = [
    { id: "Albondigas en Salsa", url: "https://img.icons8.com/?size=100&id=pZxYry6sxa64&format=png&color=000000" },
    { id: "Pollo Asado con Miel", url: "https://img.icons8.com/?size=100&id=rq1htNPCZYz0&format=png&color=000000" },
    { id: "Dorada con Mejillones", url: "https://img.icons8.com/?size=100&id=97437&format=png&color=000000" },
    { id: "Chuletas de Cerdo con Miel", url: "https://img.icons8.com/?size=100&id=kHBakFotiYhY&format=png&color=000000"},
    { id: "Pasta con Merluza Picada", url: "https://img.icons8.com/?size=100&id=80904&format=png&color=000000" },
  ];
  break;
case 'Postres':
  comidas = [
    { id: "Tarta de Chocolate", url: "https://img.icons8.com/?size=100&id=87323&format=png&color=000000"},
    { id: "Gelato", url: "https://img.icons8.com/?size=100&id=87323&format=png&color=000000" },
    { id: "Tiramisú", url: "https://img.icons8.com/?size=100&id=vIAVMl0YismK&format=png&color=000000"},
    { id: "Panna Cotta", url: "https://img.icons8.com/?size=100&id=wWLYI5Lwwztw&format=png&color=000000" },
    { id: "Pastafrola", url: "https://img.icons8.com/?size=100&id=20876&format=png&color=000000"},
  ];
  break;
case 'Bebidas':
  comidas = [
    { id: "Café", url: "https://img.icons8.com/?size=100&id=hCiex1L35nUt&format=png&color=000000" },
    { id: "CocaCola", url: "https://img.icons8.com/?size=100&id=7xzdaY01UPxw&format=png&color=000000" },
    { id: "Cerveza", url: "https://img.icons8.com/?size=100&id=13300&format=png&color=000000" },
    { id: "Refresco de Naranja", url: "https://img.icons8.com/?size=100&id=AUF9Vyor9OEB&format=png&color=000000"},
    { id: "Pisco Sour", url: "https://img.icons8.com/?size=100&id=g4ya0t-L-Ui_&format=png&color=000000" },
  ];
  break;
}
// constante para controlar el modal
const [modalVisible, setModalVisible] = useState(false);
// constante para controlar el valor  y cambio
const [number, onChangeNumber] = React.useState('');
  return (
    <View style={styles.container}>
      {/* Título de la categoría */}
      <Text style={styles.title}>Opciones para {categoria}</Text>

      {/* Botones de las opciones */}
      <View style={styles.grid}>
        {/* modal para ingresar cantidad de elementos */}
        <Modal animationType="slide" 
        transparent={true}
         visible={modalVisible}
          onRequestClose={() => {Alert.alert("modal cerrado"); 
          setModalVisible(!modalVisible)}}>
              <View style={styles.viewModal}>
                <View>
                <Text style={styles.text}>INGRESA LA CANTIDAD</Text>
                  <TextInput style={styles.input} onChangeText={onChangeNumber}
                  value={number} keyboardType="numeric"></TextInput>
                   <TouchableOpacity
                style={styles.buttonModal}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>CONFIRMAR</Text>
              </TouchableOpacity>
                </View>
               
              </View>
        </Modal>
      {comidas.map((comida) =>
        (<TouchableOpacity key={comida.id} style={styles.button} onPress={ () => setModalVisible(true)}
         > {/* se le pasa el parametro categoria con valor id */}

          <Image style={styles.img} src={comida.url} />
          <Text style={styles.text}> {comida.id}</Text>
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
  input:{
    height: 40,
    margin: 12, // se asignó las medidas para el input
    borderWidth: 1,
    padding: 10,
  },
  viewModal:{
    margin: 20,
    backgroundColor: "#17d244",
    borderRadius: 20, // medidas para el modal y color
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
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
  buttonModal:{
    padding: 10,
    backgroundColor: "#f0f0f0",
    margin: 10,
    borderRadius: 8,
    width: 150,
    alignItems: "center",

  },
  button: {
    padding: 10,
    backgroundColor: "#00bb2d",
    margin: 10,
    borderRadius: 8,
    width: 150,
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