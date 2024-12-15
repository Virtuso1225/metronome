import { View, PanResponder, GestureResponderEvent } from 'react-native'
import { useRef } from 'react'
import { Center, Progress } from '@/components/ui'

type MusicProgressProps = {
  onProgressChange?: (progress: number) => void
  progress: number
  setProgress: (progress: number) => void
}

const MusicProgress: React.FC<MusicProgressProps> = ({ onProgressChange, progress, setProgress }) => {
  const progressRef = useRef<View | null>(null)

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,

      onPanResponderGrant: (evt: GestureResponderEvent) => {
        if (!progressRef.current) return
        progressRef.current.measure((x, y, width, height, pageXOffset) => {
          const touchX = evt.nativeEvent.pageX - pageXOffset
          const newProgress = Math.max(0, Math.min((touchX / width) * 100, 100))
          onProgressChange?.(newProgress)
          setProgress(newProgress)
        })
      },

      onPanResponderMove: (evt: GestureResponderEvent) => {
        if (!progressRef.current) return
        progressRef.current.measure((x, y, width, height, pageXOffset) => {
          const touchX = evt.nativeEvent.pageX - pageXOffset
          const newProgress = Math.max(0, Math.min((touchX / width) * 100, 100))
          onProgressChange?.(newProgress)
          setProgress(newProgress)
        })
      },

      onPanResponderRelease: (evt: GestureResponderEvent) => {
        if (!progressRef.current) return
        progressRef.current.measure((x, y, width, height, pageXOffset) => {
          const touchX = evt.nativeEvent.pageX - pageXOffset
          const newProgress = Math.max(0, Math.min((touchX / width) * 100, 100))
          onProgressChange?.(newProgress)
          setProgress(newProgress)
        })
      },
    }),
  ).current

  return (
    <Center
      className="flex flex-col"
      ref={progressRef}
      style={{ paddingVertical: 12, marginHorizontal: 48 }}
      {...panResponder.panHandlers}
    >
      <Progress value={progress} size="sm" className="w-full h-1.5" />
    </Center>
  )
}

export default MusicProgress
