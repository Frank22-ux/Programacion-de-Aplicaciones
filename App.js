// Librerias de React y React Native
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Pantallas 
import { CalculadoraIMC } from "./src/pantallas/calculadoraIMC/calculadoraIMC";
import { Inicio } from "./src/pantallas/inicio/inicio";
import { ConsumeAPI } from "./src/pantallas/consumoAPI/consumeAPI";
import { DetailsApi } from "./src/pantallas/consumoAPI/detailsApi";

// instancia del stack
const Stack = createStackNavigator();
// Componente principal de la app




export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="inicio" options={{title:"Inicio"}} component={Inicio} />
        <Stack.Screen name="CalculadoraIMC" options={{title:"Calculadora IMC"}} component={CalculadoraIMC} />
        <Stack.Screen name="ConsumeAPI" options={{title:"Consume API"}} component={ConsumeAPI} />
        <Stack.Screen name="DetallePersonaje" options={{title:"Detalle Personaje"}} component={DetailsApi} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
