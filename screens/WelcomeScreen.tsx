import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/GlobalStyles'

export default function WelcomeScreen({ navigation }: any) {
  return (
    <View style={globalStyles.container}>
      <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 8 }}>MusicApp</Text>
      <Text style={{ color: 'gray', marginBottom: 40 }}>Gestion de Canciones y Playlists</Text>

      <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={globalStyles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity style={globalStyles.buttonOutline} onPress={() => navigation.navigate('Desarrollador')}>
        <Text style={globalStyles.buttonOutlineText}>Datos del Desarrollador</Text>
      </TouchableOpacity>
    </View>
  )
}
