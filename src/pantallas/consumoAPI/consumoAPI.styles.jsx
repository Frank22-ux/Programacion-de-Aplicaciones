import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row", // diseño horizontal
    alignItems: "center", // alinea verticalmente al centro
    justifyContent: "space-between",
    backgroundColor: "#1a1a2e",
    borderRadius: 12,
    padding: 16,
    margin: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  textContainer: {
    flex: 1,
    paddingRight: 12,
  },
  text: {
    fontSize: 16,
    color: "white",
    marginBottom: 6,
    textAlign: "left",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#FFA500",
    backgroundColor: "#0d0d1a",
  },
});

