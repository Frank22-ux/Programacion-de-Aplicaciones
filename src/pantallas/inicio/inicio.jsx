import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { styles } from "./inicio.styles";

export const Inicio = ({ navigation }) => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Presentación personal */}
      <Text style={styles.titulo}>¡Hola! Soy Francisco</Text>
      <Text style={styles.subtitulo}>Carrera: Desarrollo de Software</Text>
      <Text style={styles.subtitulo}>Intereses: Aprender y comprender como programar</Text>
      <Text style={styles.descripcion}>
        Me gusta aprender y cada dia aprender a crear aplicaciones o sitios web que sean llamativos.
      </Text>

      {/* Imagen de Goku */}
      <Image
        source={require("../../../assets/goku.jpg")}
        style={styles.imagen}
        resizeMode="contain"
      />

      {/* Descripción de IMC y la app */}
      <Text style={styles.titulo}>¿Qué es el IMC?</Text>
      <Text style={styles.descripcion}>
        El Índice de Masa Corporal (IMC) es una medida que relaciona el peso y la altura para
        evaluar si una persona tiene un peso saludable. Esta aplicación te ayuda a calcular tu IMC y
        conocer tu estado físico.
      </Text>

      {/*Descripción de la API */}
      <Text style={styles.titulo}>¿Qué es una API?</Text>
      <Text style={styles.descripcion}>
        Una API (Interfaz de Programación de Aplicaciones) es un conjunto de reglas y protocolos que
        permiten que diferentes aplicaciones se comuniquen entre sí. En esta aplicación, utilizamos una
        API para obtener información sobre el IMC y otros datos relacionados con la salud.
      </Text>

      {/* Botón para ir a la pantalla de consumo de API */}
      <TouchableOpacity
        style={styles.botonContainer}
        onPress={() => navigation.navigate("ConsumeAPI")}
        accessibilityRole="button"
      >
        <Text style={styles.titulo2}>Consumir API</Text>
      </TouchableOpacity>

      {/* Botón para ir a la calculadora */}
      <TouchableOpacity
        style={styles.botonContainer}
        onPress={() => navigation.navigate("CalculadoraIMC")}
        accessibilityRole="button"
      >
        <Text style={styles.titulo1}>Calcular tu Ki (IMC)</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

