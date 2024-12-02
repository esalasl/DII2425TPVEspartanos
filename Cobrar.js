import { View } from "react-native-reanimated/lib/typescript/Animated";

export default function Cobrar({ navigation }) {
  return (
    <View>
      <View>
        <Text style={styles.title}>Ventana de Cobranza</Text>
      </View>
      <View>
        
      </View>
      <View>
        <TouchableOpacity>
            onPress={() => navigation.goBack()}
            <Text style={styles.backText}>Volver</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        marginBottom: 20,
        fontWeight: "bold",
      },
});
