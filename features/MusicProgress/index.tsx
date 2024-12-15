import { View, PanResponder, Dimensions, GestureResponderEvent, PanResponderGestureState } from 'react-native'
import { useState, useRef } from 'react'
import { Center, Progress, ProgressFilledTrack } from '@/components/ui'

interface MusicProgressProps {
  onProgressChange?: (progress: number) => void
  initialProgress?: number
}

type MeasureCallback = (x: number, y: number, width: number, height: number, pageX: number, pageY: number) => void

const MusicProgress: React.FC<MusicProgressProps> = ({ onProgressChange, initialProgress = 0 }) => {
  const [progress, setProgress] = useState<number>(initialProgress)
  const progressRef = useRef<View | null>(null)
  const progressWidth = useRef<number>(0)

  const calculateProgress = (pageX: number, measureCallback: MeasureCallback): void => {
    progressRef.current?.measure((x, y, width, height, containerPageX, pageY) => {
      progressWidth.current = width
      const touchX = pageX - containerPageX
      const percentage = (touchX / width) * 100
      const newProgress = Math.min(Math.max(percentage, 0), 100)
      setProgress(newProgress)
      onProgressChange?.(newProgress)
      measureCallback(x, y, width, height, containerPageX, pageY)
    })
  }

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,

      onPanResponderGrant: (evt: GestureResponderEvent) => {
        calculateProgress(evt.nativeEvent.pageX, () => {})
      },

      onPanResponderMove: (evt: GestureResponderEvent, gestureState: PanResponderGestureState) => {
        calculateProgress(evt.nativeEvent.pageX, () => {})
      },

      // 필요한 경우 터치가 끝났을 때의 처리
      onPanResponderRelease: (evt: GestureResponderEvent, gestureState: PanResponderGestureState) => {
        // 터치가 끝났을 때의 추가 로직
      },
    }),
  ).current

  return (
    <Center
      className="flex flex-col"
      ref={progressRef}
      style={{ paddingHorizontal: 48, paddingVertical: 12 }}
      {...panResponder.panHandlers}
    >
      <Progress value={progress} size="sm" className="w-full h-1.5">
        <ProgressFilledTrack className="h-1" />
      </Progress>
    </Center>
  )
}

export default MusicProgress
