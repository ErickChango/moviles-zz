import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../styles/GlobalStyles'

export default function JuegosScreen() {

  const [id, setId] = useState("")
  const [nombreJuego, setNombreJuego] = useState("")
  const [plataforma, setPlataforma] = useState("")
  const [copiasDisponibles, setCopiasDisponibles] = useState("")

  return (
    <View style={globalStyles.container}>
      <Text>JuegosScreen</Text>

      <TextInput
        placeholder='id'
        value={id}
        onChangeText={setId}
        style={globalStyles.input} />

      <TextInput
        placeholder='nombre del juego'
        value={nombreJuego}
        onChangeText={setNombreJuego}
        style={globalStyles.input} />


      <TextInput
        placeholder='plataforma'
        value={plataforma}
        onChangeText={setPlataforma}
        style={globalStyles.input} />


      <TextInput
        placeholder='copias disponibles'
        value={copiasDisponibles}
        onChangeText={setCopiasDisponibles}
        style={globalStyles.input} />


      <Button title='Registrar Juego' onPress={() => { }} />

    </View>
  )
}

const styles = StyleSheet.create({})