import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegistrosScreen';
import PerfilScreen from '../screens/PerfilScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import JuegosScreen from '../screens/JuegosScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Drawer" component={MyDrawer} />
    </Stack.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Perfil" component={PerfilScreen} />
      <Drawer.Screen name="Juegos" component={JuegosScreen} />
    </Drawer.Navigator>
  );
}

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}