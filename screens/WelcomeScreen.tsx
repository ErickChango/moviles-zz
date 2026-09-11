import { Button, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/GlobalStyles'

export default function WelcomeScreen( {navigation}: any  ) {
  return (
    <View style={globalStyles.container}>
      <Text>WelcomeScreen</Text>
      <TouchableOpacity
      style={globalStyles.button}
      onPress={() => navigation.navigate('Login')}>
        <Text style={globalStyles.buttonText}>Ir a Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={globalStyles.button}
      onPress={() => navigation.navigate('Register')}>
        <Text style={globalStyles.buttonText}>Ir a Register</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})