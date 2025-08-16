
import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import Calculator from './Calculator'

const Index = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{ title: 'Calculator', headerTitleAlign: 'center' }}
      />
      <Calculator />
    </View>
  )
}

export default Index

const styles = StyleSheet.create({
  container: {
    flex:1
  },
})
