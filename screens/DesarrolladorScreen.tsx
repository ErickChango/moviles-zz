import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function DesarrolladorScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Datos del Desarrollador</Text>

      <View style={styles.caja}>
        <Text style={styles.item}>Nombre: Erick Chango</Text>
        <Text style={styles.item}>Materia: Aplicaciones Moviles</Text>
        <Text style={styles.item}>Carrera: Desarrollo de Software</Text>
        <Text style={styles.item}>Proyecto: Gestion de Canciones</Text>
        <Text style={styles.item}>Tecnologias: React Native + Firebase</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 10,
  },
  caja: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 6,
  },
  item: {
    fontSize: 15,
    marginBottom: 10,
    color: '#333',
  },
})
