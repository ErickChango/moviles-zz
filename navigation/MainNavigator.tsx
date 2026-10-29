import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import CancionesScreen from '../screens/CancionesScreen';
import GenerarPlaylistScreen from '../screens/GenerarPlaylistScreen';
import DesarrolladorScreen from '../screens/DesarrolladorScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Canciones" component={CancionesScreen} />
      <Stack.Screen name="GenerarPlaylist" component={GenerarPlaylistScreen} options={{ title: 'Generar Playlist' }} />
      <Stack.Screen name="Desarrollador" component={DesarrolladorScreen} options={{ title: 'Datos del Desarrollador' }} />
    </Stack.Navigator>
  );
}

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
