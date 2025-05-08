import { StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola soy Goku!!!</Text>
      <Image style={styles.imagen} source={{uri:"https://play-lh.googleusercontent.com/3wPaD-PGK0f0RlM3sqH0rFEV0gLwhAGDRaIK8DcDvK8bExY6pR8INE6F0EjuHIIp5Whx"}}/> 
      <TextInput style={styles.TextInput} keyboardType='numeric' placeholder='Ingrese su peso en kg: ' />
      <TextInput style={styles.TextInput} keyboardType='numeric' placeholder='Ingrese su altura en cm: ' />    
      <Button title='Calcular' onPress={() => {
        Alert.alert("Hola soy Goku!!!", "Es momento de entrenar");
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagen: {
    width: 200,
    height: 200,
  },

  TextInput:{
    height: 50,
    borderColor: 'gray',
    borderRadius: 10,
    borderWidth: 3,
    marginBottom: 10,
    width: 200,
    paddingLeft: 10,
  }

});

