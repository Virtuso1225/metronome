import { useCallback, useEffect, useRef, useState } from 'react'
import { YoutubeIframeRef } from 'react-native-youtube-iframe'

export const useYoutubeController = () => {
  const [playing, setPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  // const progressValue = useSharedValue(0)
  const youtubeRef = useRef<YoutubeIframeRef>(null)

  // progress를 외부에 노출하기 위한 state
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!playing || !youtubeRef.current) return
    const interval = setInterval(() => {
      if (!youtubeRef.current) return
      youtubeRef.current.getCurrentTime().then(time => {
        setCurrentTime(time)
        setProgress((time / duration) * 100)
      })
    }, 500)
    return () => clearInterval(interval)
  }, [duration])

  useEffect(() => {
    if (!youtubeRef.current) return
    youtubeRef.current.getDuration().then(setDuration)
  }, [youtubeRef.current])

  const handleProgressChange = useCallback(
    (newProgress: number) => {
      if (!youtubeRef.current || !duration) return

      const newTime = (duration * newProgress) / 100
      setProgress(newProgress)
      setCurrentTime(newTime)
      youtubeRef.current.seekTo(newTime, true)
    },
    [duration],
  )

  const handlePlay = useCallback(() => setPlaying(p => !p), [])

  const handleSeekStart = useCallback(() => {
    if (!youtubeRef.current) return
    youtubeRef.current.seekTo(0, true)
    setProgress(0)
    setPlaying(true)
  }, [])

  const handleSeekEnd = useCallback(() => {
    if (!youtubeRef.current) return
    youtubeRef.current.seekTo(duration, true)
    setProgress(100)
    setPlaying(false)
    setCurrentTime(duration)
  }, [duration])

  return {
    playing,
    duration,
    currentTime,
    handlePlay,
    youtubeRef,
    handleSeekStart,
    handleSeekEnd,
    progress,
    handleProgressChange,
  }
}
