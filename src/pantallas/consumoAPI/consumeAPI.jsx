import { View, Text, Image, ActivityIndicator, FlatList } from "react-native";
import { styles } from "./consumoAPI.styles";
import { Card } from "../../componentes/card/card.jsx";
import { Container } from "../../componentes/container/container.jsx";
import { useEffect, useState } from "react";

export const ConsumeAPI = ( {navigation} ) => {
  const [personajes, setPersonajes] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPersonajes = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const json = await response.json();
      setPersonajes(json.results); // <- Aquí tenías "data" pero luego usabas "json"
    } catch (error) {
      console.log("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Hook correctamente usado
  useEffect(() => {
    getPersonajes();
  }, []);

  // Mostrar cargando
  if (loading) {
    return <ActivityIndicator size="large" color="#00ff00" />;
  }

  // Mostrar lista de personajes
  return (
    <Container>
      <FlatList
        data={personajes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            url={item.image}
            nombre={item.name}
            especie={item.species}
            alPresionar= {() =>
              navigation.navigate("DetallePersonaje", {character: item})}
          />  
        )}
      />
    </Container>
  );
};
