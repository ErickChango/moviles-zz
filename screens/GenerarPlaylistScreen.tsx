import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../styles/GlobalStyles'
import { db, auth } from '../firebase/config'
import { ref, push, set } from 'firebase/database'

export default function GenerarPlaylistScreen() {

  const [txt, setTxt] = useState("")

  function guardar() {
    const uid = auth.currentUser?.uid
    if (!uid || txt == "") return
    const r = ref(db, 'playlists/' + uid)
    const n = push(r)
    set(n, { nombre: txt })
    setTxt("")
    alert("listo!")
  }

  return (
    <View style={globalStyles.container}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 20 }}>Generar Playlist</Text>

      <TextInput
        placeholder='nombre'
        value={txt}
        onChangeText={setTxt}
        style={globalStyles.input}
      />

      <TouchableOpacity style={globalStyles.button} onPress={guardar}>
        <Text style={globalStyles.buttonText}>Guardar</Text>
      </TouchableOpacity>
    </View>
  )
}
