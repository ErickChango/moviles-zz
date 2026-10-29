import { View, Text, FlatList, Image, TouchableOpacity, Modal, ActivityIndicator, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { globalStyles } from '../styles/GlobalStyles'
import { db, auth } from '../firebase/config'
import { ref, onValue, set } from 'firebase/database'
import { onAuthStateChanged } from 'firebase/auth'

type Cancion = {
  id: string
  title: string
  artist: { name: string }
  duration: string
  duration_seconds: number
  album: { cover_art_url: string }
  media: { cover_image: string }
}

export default function CancionesScreen({ navigation }: any) {

  const [listaCanciones, setListaCanciones] = useState<Cancion[]>([])
  const [loading, setLoading] = useState(true)
  const [show, setShow] = useState(false)
  const [seleccionada, setSeleccionada] = useState<Cancion | null>(null)
  const [misPlaylists, setMisPlaylists] = useState<any[]>([])
  const [userId, setUserId] = useState("")

  useEffect(() => {
    fetch('https://jritsqmet.github.io/web-api/assets/json/musica2.json')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setListaCanciones(data.musica)
        setLoading(false)
      })
      .catch(err => {
        console.log("error fetching", err)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid)
        const r = ref(db, 'playlists/' + user.uid)
        onValue(r, (snap) => {
          const data = snap.val()
          let temp: any[] = []
          if (data) {
            temp = Object.keys(data).map(k => ({ id: k, ...data[k] }))
          }
          setMisPlaylists(temp)
        })
      }
    })
  }, [])

  function onPresCancion(c: Cancion) {
    setSeleccionada(c)
    setShow(true)
  }

  function guardarEnPlaylist(pid: string) {
    if (!seleccionada || !userId) return
    const ruta = 'playlists/' + userId + '/' + pid + '/canciones/' + seleccionada.id
    set(ref(db, ruta), {
      titulo: seleccionada.title,
      artista: seleccionada.artist.name,
      duracion: seleccionada.duration,
      duracion_segundos: seleccionada.duration_seconds,
    })
    setShow(false)
    alert('agregada!')
  }

  function renderItem({ item }: any) {
    const img = item.album?.cover_art_url || item.media?.cover_image
    return (
      <TouchableOpacity style={styles.card} onPress={() => onPresCancion(item)}>
        <Image source={{ uri: img }} style={styles.img} />
        <View style={{ flex: 1 }}>
          <Text style={styles.nombre}>{item.title}</Text>
          <Text style={styles.sub}>{item.artist.name}</Text>
          <Text style={styles.sub}>{item.duration}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  if (loading) {
    return (
      <View style={globalStyles.container}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headerTitulo}>Canciones</Text>
        <TouchableOpacity onPress={() => navigation.navigate('GenerarPlaylist')}>
          <Text style={styles.headerLink}>Mis Playlists</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={listaCanciones}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />

      <Modal visible={show} transparent animationType="slide">
        <View style={styles.modalFondo}>
          <View style={styles.modalCaja}>
            <Text style={styles.modalTitulo}>Agregar a playlist</Text>
            <Text style={{ color: 'gray', marginBottom: 12 }}>{seleccionada?.title}</Text>

            {misPlaylists.length === 0 ? (
              <Text style={{ color: 'gray' }}>No tienes playlists aun</Text>
            ) : (
              misPlaylists.map(p => (
                <TouchableOpacity key={p.id} style={styles.opcion} onPress={() => guardarEnPlaylist(p.id)}>
                  <Text>{p.nombre}</Text>
                </TouchableOpacity>
              ))
            )}

            <TouchableOpacity style={{ padding: 10, alignItems: 'center', marginTop: 10 }} onPress={() => setShow(false)}>
              <Text style={{ color: 'gray' }}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  headerTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerLink: {
    fontSize: 14,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    marginHorizontal: 10,
    marginTop: 8,
    borderRadius: 6,
    alignItems: 'center',
  },
  img: {
    width: 60,
    height: 60,
    marginRight: 12,
    borderRadius: 4,
  },
  nombre: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  sub: {
    color: 'gray',
    fontSize: 13,
  },
  modalFondo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalCaja: {
    backgroundColor: 'white',
    padding: 20,
    width: '80%',
    borderRadius: 8,
  },
  modalTitulo: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  opcion: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
})
