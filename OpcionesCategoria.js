import React, { useState } from "react";
import { FlatList, View, Text, TouchableOpacity, StyleSheet, Image, Modal } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import menuimgd from "./assets/menuimg";
import { useContext } from "react";
import { ComandaContext } from "./node_modules/AlmacenDatos";



export default function OpcionesCategoria({ route, navigation }) {
  const { categoria } = route.params || { categoria: "sin categoría" }; // Recibe la categoría seleccionada
 const {mesa} = route.params;
  const { comandas, addComanda } = useContext(ComandaContext);
  const [selectedItem, setSelectedItem] = useState(null);
  let comidas = [];
  // switch que le asigna las comidas dependiendo del tipo
  switch (categoria) {
    case 'Entrantes':
      comidas = menuimgd.Entrantes;
      break;
    case 'Primeros':
      comidas = menuimgd.Primeros;
      break;
    case 'Segundos':
      comidas = menuimgd.Segundos;
      break;
    case 'Postres':
      comidas = menuimgd.Postres;
      break;
    case 'Bebidas':
      comidas = menuimgd.Bebidas;
      break;
  }
  // constante para controlar el modal
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedItem(null);
  };
  // constante para controlar el valor  y cambio
  const [number, onChangeNumber] = React.useState('');
  return (
    
      <View style={styles.container}>
        <Text style={styles.title}>Opciones para {categoria}</Text>
        <View style={styles.grid}>

          <Modal animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => { closeModal }}>
            <View style={styles.viewModal}>
              <View>
                <Text style={styles.text}>INGRESA LA CANTIDAD</Text>
                <TextInput style={styles.input} onChangeText={onChangeNumber}
                  value={number} keyboardType="numeric"></TextInput>
                <TouchableOpacity
                  style={styles.buttonModal}
                  onPress={() => {
                    setModalVisible(!modalVisible)
                    addComanda( mesa,selectedItem , number );
                  }
                  }>
                  <Text style={styles.textStyle}>CONFIRMAR</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          {comidas.map((comida) =>
          (<TouchableOpacity key={comida.id} style={styles.button} onPress={() => openModal(comida.id)}>

            <Image style={styles.img} src={comida.url} />
            <Text style={styles.text}> {comida.id}</Text>
          </TouchableOpacity>
          ))}
        </View>


        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.continueButton} onPress={() => { }}>
            <Text style={styles.actionText}>Continuar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.finalizeButton} onPress={() => { }}>
            <Text style={styles.actionText}>Finalizar</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>Volver</Text>
        </TouchableOpacity>
      </View>
  
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12, // se asignó las medidas para el input
    borderWidth: 1,
    padding: 10,
  },
  viewModal: {
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
  buttonModal: {
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