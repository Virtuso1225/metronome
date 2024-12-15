import { HorizontalSpacing, Image, Text, View } from '@/components/ui'
import MusicController from '@/features/MusicController'
import MusicProgress from '@/features/MusicProgress'
import { useRef } from 'react'

interface Sound {
  getDuration: () => number
  setPositionAsync: (position: number) => Promise<void>
}

const MusicPlayer = () => {
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const soundRef = useRef<Sound | null>(null)

  const handleProgressChange = async (newProgress: number) => {
    if (soundRef.current) {
      try {
        const duration = soundRef.current.getDuration()
        const newPosition = (duration * newProgress) / 100
        await soundRef.current.setPositionAsync(newPosition)
      } catch (error) {
        console.error('Error setting audio position:', error)
      }
    }
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
      <View className="flex flex-col items-center p-5">
        <Text className="mb-1 text-2xl font-semibold text-gray-900">Midnight City</Text>
        <Text className="text-base text-gray-500">M83</Text>
        <Text className="mt-1 text-sm text-gray-400">Hurry Up, We're Dreaming</Text>
      </View>
      <HorizontalSpacing size={10} />
      <MusicProgress onProgressChange={handleProgressChange} initialProgress={0} />
      <View className="flex flex-row justify-between text-[13px] text-gray-500 px-12">
        <Text>{formatTime(0)}</Text>
        <Text>-{formatTime(60 * 3 - 0)}</Text>
      </View>
      <HorizontalSpacing size={40} />
      <MusicController />
    </View>
  )
}

export default MusicPlayer
