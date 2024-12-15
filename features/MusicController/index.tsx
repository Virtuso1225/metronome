import { View, Icon } from '@/components/ui'
import * as s from './style.css'
import React from 'react'
import { Pause, Play, SkipBack, SkipForward } from 'lucide-react-native'
import { Pressable } from 'react-native'
import { vars } from '@/constants/vars'

type Props = {
  playing: boolean
  handlePlay: () => void
  handleSeekStart: () => void
  handleSeekEnd: () => void
}

const MusicController = ({ playing, handlePlay, handleSeekStart, handleSeekEnd }: Props) => {
  return (
    <View className={s.Wrapper({})}>
      <Pressable onPress={handleSeekStart}>
        <Icon as={SkipBack} size="xl" color={vars.$scale.color.primary700} />
      </Pressable>
      <Pressable onPress={handlePlay}>
        <Icon as={playing ? Pause : Play} size="xl" color={vars.$scale.color.primary700} />
      </Pressable>
      <Pressable onPress={handleSeekEnd}>
        <Icon as={SkipForward} size="xl" color={vars.$scale.color.primary700} />
      </Pressable>
    </View>
  )
}

export default MusicController
