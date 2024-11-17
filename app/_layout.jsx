import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const RootLayout = () => {
  return (
    <Stack screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name='index'></Stack.Screen>
        <Stack.Screen name='Pomodoro'></Stack.Screen> */}
        {/* <Stack.Screen name='Break'></Stack.Screen> */}
        {/* <Stack.Screen name='Todo'></Stack.Screen> */}
    </Stack>
  )
}

export default RootLayout