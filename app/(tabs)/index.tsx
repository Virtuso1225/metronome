import { StyleSheet } from 'react-native'

import EditScreenInfo from '@/components/EditScreenInfo'
import { Text } from '@/components/ui/text'
import { View } from '@/components/ui/view'
import { Divider } from '@/components/ui/divider'
import { vars } from 'nativewind'

export default function TabOneScreen() {
  const color = vars({ '--color-primary-950': 'var(--color-primary-950)' })
  return (
    <View className="flex justify-center items-center flex-1">
      {/* <Text className="color-red-900" style={styles.title}>
        Tab One
      </Text> */}
      <Text className="color-red-900">Tab One</Text>
      <Divider />
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})
