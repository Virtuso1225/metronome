import { HorizontalSpacing, Image, Text, View } from '@/components/ui'
import BpmController from '@/features/BpmController'
import MusicController from '@/features/MusicController'
import { useYoutubeController } from '@/features/MusicController/utils/useYoutubeController'
import MusicProgress from '@/features/MusicProgress'
import { useCallback, useEffect, useRef, useState } from 'react'
import YoutubePlayer from 'react-native-youtube-iframe'
interface Sound {
  getDuration: () => number
  setPositionAsync: (position: number) => Promise<void>
}

const MusicPlayer = () => {
  const {
    playing,
    duration,
    currentTime,
    handlePlay,
    handleSeekStart,
    handleSeekEnd,
    youtubeRef,
    progress,
    handleProgressChange,
  } = useYoutubeController()

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <View className="flex flex-col h-full bg-background-0/80 backdrop-blur-xl">
      <View className="p-12 overflow-hidden">
        <View className="aspect-square rounded-[24px] shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=800&fit=crop' }}
            alt="album cover"
            className="w-full h-full rounded-[24px] object-cover"
          />
        </View>
      </View>
      <YoutubePlayer
        height={0}
        play={playing}
        playbackRate={1}
        ref={youtubeRef}
        videoId={'JqBU5BvBle8'}
        webViewStyle={{ display: 'flex' }}
      />
      <View className="flex flex-col items-center p-5">
        <Text className="mb-1 text-2xl font-semibold text-primary-900">Midnight City</Text>
        <Text className="text-base text-gray-500">M83</Text>
        <Text className="mt-1 text-sm text-gray-400">Hurry Up, We're Dreaming</Text>
      </View>
      <HorizontalSpacing size={10} />
      <MusicProgress progress={progress} setProgress={handleProgressChange} onProgressChange={handleProgressChange} />
      <View className="flex flex-row justify-between text-[13px] text-gray-500 px-12">
        <Text>{formatTime(currentTime)}</Text>
        <Text>{formatTime(duration)}</Text>
      </View>
      <HorizontalSpacing size={20} />
      <MusicController
        playing={playing}
        handlePlay={handlePlay}
        handleSeekStart={handleSeekStart}
        handleSeekEnd={handleSeekEnd}
      />
      <HorizontalSpacing size={20} />
      <BpmController />
      {/* <MusicProgress onProgressChange={handleProgressChange} initialProgress={0} /> */}
    </View>
  )
}

export default MusicPlayer
