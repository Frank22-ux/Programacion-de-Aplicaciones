import { View, Image, Text, StyleSheet } from "react-native";
import { Container } from "../../componentes/container/container";
import { styles } from "./detailsApi.styles";

export const DetailsApi = ({route}) => {

    const { character } = route.params; 

    return <Container>
        <Image style={styles.image}
        source={{ uri: character.image }}/>
        <Text style={styles.name}>
            Nombre: {character.name}
        </Text>
        <Text style={styles.name}>
            Especie: {character.species}
        </Text>
        <Text style={styles.name}>
            Estado: {character.status}
        </Text>
        <Text style={styles.name}>
            Género: {character.gender}
        </Text>
        <Text style={styles.name}>
            Origen: {character.origin.name}
        </Text>
        <Text style={styles.name}>
            Ubicación: {character.location.name}
        </Text>
    </Container>

};