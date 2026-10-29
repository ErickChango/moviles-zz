import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../styles/GlobalStyles'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/config'

export default function LoginScreen({ navigation }: any) {

  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")

  function entrar() {
    signInWithEmailAndPassword(auth, email, pass)
      .then((res) => {
        console.log(res.user)
        navigation.replace('Canciones')
      })
      .catch((e) => {
        Alert.alert("Error", "Credenciales incorrectas")
      });
  }

  return (
    <View style={globalStyles.container}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 30 }}>Login</Text>

      <TextInput
        placeholder='correo'
        value={email}
        onChangeText={setEmail}
        style={globalStyles.input}
        autoCapitalize="none"
      />

      <TextInput
        placeholder='contrasena'
        secureTextEntry
        value={pass}
        onChangeText={setPass}
        style={globalStyles.input}
      />

      <TouchableOpacity style={globalStyles.button} onPress={entrar}>
        <Text style={globalStyles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  )
}
