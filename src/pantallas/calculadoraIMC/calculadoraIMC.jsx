import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Alert,
} from "react-native";

import { styles } from "./CalculadoraMC.styles";

export const CalculadoraIMC = () => {

  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [imagenResultado, setImagenResultado] = useState("");

  const CalcularPeso = (peso, altura) => {
    let imc = peso / (altura * altura);
    return imc.toFixed(2);
  };

  const CalcularPesoIdeal = (peso, altura) => {
    let imc = CalcularPeso(peso, altura);
    let respuesta = "";
    if (imc < 18.5) {
      respuesta = "Su imc es " + imc + " y tiene bajo peso ⚠️";
      setImagenResultado("https://i.pinimg.com/736x/23/6d/b0/236db06b6d2871c54c833d2265f8920a.jpg");
    }
    if (imc >= 18.5 && imc < 24.9) {
      respuesta = "Su imc es " + imc + " y tiene peso normal ✅";
      setImagenResultado("https://www.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2015/05/480658-dragon-ball-super-revela-aspecto-goku-manga.jpg");
    }
    if (imc >= 25 && imc < 29.29) {
      respuesta = "Su imc es " + imc + " y tiene sobrepeso ⚠️";
      setImagenResultado("https://cdn.pixabay.com/photo/2021/02/18/20/52/goku-6028390_960_720.png");
    }
    if (imc >= 30) {
      respuesta = "Su imc es " + imc + " y tiene obesidad 🔥";
      setImagenResultado("https://i.pinimg.com/736x/2a/18/ad/2a18ad50809d4cb9d4ab9eb3b04dfa54.jpg");
    }
    return respuesta;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>¡Hola soy Goku! 🐉</Text>
      <Text style={styles.titulo1}>Vamos a calcular tu ki!!! 🔥</Text>
      <Image
        style={styles.imagen}
        source={{
          uri: "https://play-lh.googleusercontent.com/3wPaD-PGK0f0RlM3sqH0rFEV0gLwhAGDRaIK8DcDvK8bExY6pR8INE6F0EjuHIIp5Whx",
        }}
      />
      <TextInput
        onChangeText={(value) => setPeso(value)}
        style={styles.TextInput}
        keyboardType="numeric"
        placeholder="Ingrese su peso en kg"
        placeholderTextColor="#FFD700"
      />
      <TextInput
        onChangeText={(value) => setAltura(value)}
        style={styles.TextInput}
        keyboardType="numeric"
        placeholder="Ingrese su altura en cm"
        placeholderTextColor="#FFD700"
      />
      <View style={styles.botonContainer}>
        <Button
          title="Calcular"
          color="#FFA500"
          onPress={() => {
            Alert.alert("Información", CalcularPesoIdeal(peso, altura));
          }}
          
        />
      </View>
          {imagenResultado && (
      <Image
        style={styles.imagenResultado}
        source={{ uri: imagenResultado }}
      />
    )}
    </View>
  );
}