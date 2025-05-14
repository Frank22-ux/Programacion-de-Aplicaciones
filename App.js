//Manejar estados de las variables
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

export default function App() {
  //Declarar el estado de las variables
  //tipo de variable que se va a manejar
  //useState("valor inicial")
  //useState(0) -> para numeros
  //useState(false) -> para booleanos
  //useState([]) -> para arreglos
  //useState({}) -> para objetos
  //useState("") -> para cadenas de texto
  //setTexto es una funcion que se encarga de cambiar el valor de la variable
  //setTexto("Hola soy Goku!!!");
  //console.log(texto) es una forma de ver el valor de la variable en la consola
  //console.log(texto);
  const [texto, setTexto] = useState("");

  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);

  const CalcularPeso = (peso, altura) => {
    let imc = peso / (altura * altura);
    return imc.toFixed(2);
  }

  const CalcularPesoIdeal = (peso,altura) => {
    let imc = CalcularPeso(peso,altura);
    let respuesta = "";
    if (imc < 18.5) {
      respuesta = "Su imc es "+ imc + " y tiene bajo peso";
    } if (imc >= 18.5 && imc < 24.9) {
      respuesta = "Su imc es "+ imc + " y tiene peso normal";
    } if (imc >= 25 && imc < 29.29) {
      respuesta = "Su imc es "+ imc + " y tiene sobrepeso";
    } if (imc >= 30) {
      respuesta = "Su imc es "+ imc + " y tiene obesidad";
    }
    return respuesta;
  }

  return (
    <View style={styles.container}>
      <Text>Hola soy Goku!!!</Text>
      <Image
        style={styles.imagen}
        source={{
          uri: "https://play-lh.googleusercontent.com/3wPaD-PGK0f0RlM3sqH0rFEV0gLwhAGDRaIK8DcDvK8bExY6pR8INE6F0EjuHIIp5Whx",
        }}
      />
      <TextInput
        onChangeText={(value) => setPeso(value)} //onChangeText es una funcion que se ejecuta cuando el texto cambia}
        style={styles.TextInput}
        keyboardType="numeric"
        placeholder="Ingrese su peso en kg: "
      />
      <TextInput
        onChangeText={(value) => {
          setAltura(value);
          console.log(altura);
        }} //onChangeText es una funcion que se ejecuta cuando el texto cambia}
        style={styles.TextInput}
        keyboardType="numeric"
        placeholder="Ingrese su altura en cm: "
      />
      <Button
        title="Calcular"
        onPress={() => {
          Alert.alert("Hola soy Goku!!!", "Es momento de entrenar");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  imagen: {
    width: 200,
    height: 200,
  },

  TextInput: {
    height: 50,
    borderColor: "gray",
    borderRadius: 10,
    borderWidth: 3,
    marginBottom: 10,
    width: 200,
    paddingLeft: 10,
  },
});
