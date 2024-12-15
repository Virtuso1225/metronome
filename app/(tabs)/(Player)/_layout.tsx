import { useClientOnlyValue } from '@/components/useClientOnlyValue'
import { Stack } from 'expo-router'
import React from 'react'
import { View } from '@/components/ui'

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
