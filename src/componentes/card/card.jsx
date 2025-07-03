import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "./card.styles";

export const Card = (props)=> {
  return ( <TouchableOpacity onPress={props.alPresionar}>
    <View style={styles.cardContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{ props.nombre }</Text>
            <Text style={styles.text}>{ props.especie }</Text>
          </View>
          <Image
            source={{ uri: props.url }}
            style={styles.image}
          />
    </View>
    </TouchableOpacity>
  );
}