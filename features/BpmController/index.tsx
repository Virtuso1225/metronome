import React from 'react'
import { useColorScheme, View } from 'react-native'
import { Text } from '@/components/ui/text'
import { Icon, Switch } from '@/components/ui'
import { Music2 } from 'lucide-react-native'
import { vars } from '@/constants/vars'

const BpmController = () => {
  return (
    <View className="flex flex-col items-center gap-4 px-12">
      <View className="flex flex-row items-center justify-between w-full">
        <View className="flex flex-row items-center">
          <Icon as={Music2} size="sm" />
          <Text className="text-sm font-medium">BPM: 120</Text>
        </View>
        <Switch
          size="sm"
          trackColor={{ false: '#000', true: vars.$scale.color.background800 }}
          ios_backgroundColor={vars.$scale.color.background100}
        />
      </View>
    </View>
  )
}

export default BpmController
