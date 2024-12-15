import { View, Icon } from '@/components/ui'
import * as s from './style.css'
import React from 'react'
import { Play, SkipBack, SkipForward } from 'lucide-react-native'
import { Pressable } from 'react-native'

const MusicController = () => {
  return (
    <View className={s.Wrapper({})}>
      <Pressable>
        <Icon as={SkipBack} size="xl" color="black" />
      </Pressable>
      <Pressable>
        <Icon as={Play} size="xl" color="black" />
      </Pressable>
      <Pressable>
        <Icon as={SkipForward} size="xl" color="black" />
      </Pressable>
    </View>
  )
}

export default MusicController
