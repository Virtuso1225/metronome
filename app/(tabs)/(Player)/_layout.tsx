import { Stack } from 'expo-router'
import React from 'react'
import { useColorScheme } from 'react-native'

export default function PlayerLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  )
}
