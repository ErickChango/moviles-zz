import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../styles/GlobalStyles'

export default function RegistrosScreen( {navigation}: any) {
  const [correo, setCorreo] = useState("")
  const [contraseña, setContraseña] = useState("")
const [nombre, setNombre] = useState("")
const [edad, setEdad] = useState("")

  return (
    <View style={globalStyles.container}>
      <Text>RegistrosScreen</Text>



      <TextInput
        placeholder='Correo'
        value={correo}
        onChangeText={setCorreo}
        style={globalStyles.input} />

      <TextInput
        placeholder='Contraseña'
        secureTextEntry
        value={contraseña}
        onChangeText={setContraseña}
        style={globalStyles.input}
      />

      <TextInput
        placeholder='Nombre'
        value={nombre}
        onChangeText={setNombre}
        style={globalStyles.input} />

      <TextInput
        placeholder='Edad'
        value={edad}
        onChangeText={setEdad}
        style={globalStyles.input} />

      <Button title='Registrar' onPress={() => { navigation.navigate('Login') }} />



    </View>
  )
}

const styles = StyleSheet.create({})