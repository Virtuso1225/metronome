import React from 'react'
import { Tabs } from 'expo-router'

import { useClientOnlyValue } from '@/components/useClientOnlyValue'
import { vars } from '@/constants/vars'
import { Icon } from '@/components/ui/icon'
import { View } from '@/components/ui/view'
import { AudioLinesIcon, Home } from 'lucide-react-native'

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: vars.$scale.color.secondary400,
        tabBarActiveTintColor: vars.$scale.color.primary400,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        animation: 'shift',
      }}
    >
      <Tabs.Screen
        // key={colorScheme}
        name="(Player)"
        options={{
          header: () => <View className="h-20 bg-background-0/80" />,
          title: 'Home',
          tabBarIcon: ({ color }) => <Icon as={Home} color={color} />,
        }}
      />
      {/* <Tabs.Screen
        name="two"
        options={{
          title: 'EQ',
          tabBarIcon: ({ color }) => <Icon as={AudioLinesIcon} color={color} />,
        }}
      /> */}
    </Tabs>
  )
}

export default TabLayout
