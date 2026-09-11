import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../styles/GlobalStyles'

export default function LoginScreen({navigation}: any) {

const [correo, setCorreo] = useState("")

const [contraseña, setContraseña] = useState("")
  return (
    <View style={globalStyles.container}>
      <Text>LoginScreen</Text>

      <TextInput
       placeholder='Correo' 
      value={correo} 
      onChangeText  ={setCorreo} 
      style={globalStyles.input}/>

      <TextInput
      placeholder='Contraseña'
      secureTextEntry
      value={contraseña}
      onChangeText={setContraseña}
      style={globalStyles.input}
      />

      <Button title='Iniciar Sesión' onPress={() => { navigation.navigate('Drawer') }} />
    </View>
  )
}

const styles = StyleSheet.create({})