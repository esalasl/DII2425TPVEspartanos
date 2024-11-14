import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default function Menu(){
    return (
        <View style={styles.container}>
          <TouchableOpacity style={styles.insertar}>
            <Text>
              INSERTAR
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.comprobar}>
            <Text >
              COMPROBAR
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cobrar}>
            <Text>
              COBRAR
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.volver}>
            <Text>
              VOLVER
            </Text>
          </TouchableOpacity>
    
          <StatusBar style="auto" />
        </View>
      );

}

const styles = StyleSheet.create({
    container: {
      flex: 5,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    volver: {
      alignItems: 'center',
      paddingVertical: 9,
      paddingHorizontal: 25,
      margin: 150,
      borderRadius: 15,
      justifyContent: 'center',
      backgroundColor: '#33f900',
  
    },
    insertar: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 20,
      paddingHorizontal: 40,
      margin: 10,
      borderRadius: 15,
      backgroundColor: '#33f900',
      marginTop:250,
    },
     comprobar: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 20,
      paddingHorizontal: 40,
      margin: 10,
      borderRadius: 15,
      backgroundColor: '#33f900',
    },
     cobrar: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 20,
      paddingHorizontal: 40,
      margin: 10,
      borderRadius: 15,
      backgroundColor: '#33f900',
      marginBottom:100,
    },
  });
  