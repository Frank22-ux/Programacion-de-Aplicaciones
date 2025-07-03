import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a2e", // azul oscuro, aura de Goku
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFD700", // amarillo oro, estilo Super Saiyan
    marginBottom: 15,
    textShadowColor: "#FFA500",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  imagen: {
    width: 220,
    height: 220,
    marginBottom: 25,
    borderRadius: 110,
    borderWidth: 4,
    borderColor: "#FFA500", // borde naranja del traje de Goku
  },
  TextInput: {
    height: 50,
    borderColor: "#FFA500",
    borderWidth: 3,
    borderRadius: 15,
    marginBottom: 15,
    width: 250,
    paddingLeft: 15,
    fontSize: 18,
    color: "white",
    backgroundColor: "#0d0d1a",
  },
  botonContainer: {
    width: 250,
    borderRadius: 15,
    overflow: "hidden",
    marginTop: 10,
    backgroundColor: "#FF6F00", // naranja fuerte para el botón
  },

  titulo1: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFD700", // amarillo oro, estilo Super Saiyan
    marginBottom: 15,
    textShadowColor: "#FFA500",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  imagenResultado: {
    width: 200,
    height: 200,
    marginTop: 20,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: "#FFA500", // borde naranja del traje de Goku
  },
});