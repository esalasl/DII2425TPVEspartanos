import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function OpcionesMesas_S({navigation}) {
    return (
        <View>
            <TouchableOpacity style={styles.buttons} onPress={() => {}}>
                <Text style={styles.textButton}>Insertar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={() => {}}>
                <Text style={styles.textButton}>Comprobar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={() => {}}>
                <Text style={styles.textButton}>Cobrar</Text>
            </TouchableOpacity>
        </View>
    );

}

const styles = StyleSheet.create({

buttons:{
    padding: 18,
    backgroundColor: "#4CAF50",
    marginVertical: 10,
    borderRadius: 13,
    width: 150,
    alignItems: "center",
},
textButton:{
    color:"white"
}

});