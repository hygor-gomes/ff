import React from "react";

import Home from "./src/pages/Home";
import Compras  from "./src/pages/Compras";


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Compras" component={Compras}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}