import { Button, ButtonText } from '@/components/ui/button'

import { StatusBar } from 'expo-status-bar'
import { Platform, StyleSheet } from 'react-native'
import EditScreenInfo from '@/components/EditScreenInfo'
import { Text, View } from '@/components/Themed'
import { vars } from '@/constants/vars'

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ color: vars.$scale.color.error0 }}>Modal!!</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/modal.tsx" />
      <Button className="web:bg-red-500 ios:bg-blue-500 android:bg-green-500">
        <ButtonText className="bg-blue-900">Hello World</ButtonText>
      </Button>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
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
