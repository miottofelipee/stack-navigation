import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Home() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity 
      style={styles.navButton}
      onPress={() => navigation.navigate
      ('Profile')}
      >
        <Text>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.navButton}
      onPress={() => navigation.navigate
      ('Contact')}
      >
        <Text>Contact</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  navButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'lightgray',
    color:'black',
    borderRadius: 5,
  }
})