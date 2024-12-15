import { forwardRef, memo, Ref } from 'react'
import { View } from 'react-native'

type Props = {
  size: number
  fill?: string
  direction?: 'horizontal' | 'vertical'
}

export const Spacing = forwardRef(({ size, fill = 'transparent', direction = 'horizontal' }: Props, ref: Ref<View>) => {
  switch (direction) {
    case 'vertical':
      return (
        <View
          ref={ref}
          aria-hidden
          style={{
            minWidth: size,
            minHeight: '100%',
            backgroundColor: fill,
          }}
        />
      )
    default:
    case 'horizontal':
      return (
        <View
          ref={ref}
          aria-hidden
          style={{
            minWidth: '100%',
            minHeight: size,
            backgroundColor: fill,
          }}
        />
      )
  }
})

export const VerticalSpacing = memo((props: Omit<Props, 'direction'>) => <Spacing direction="vertical" {...props} />)

export const HorizontalSpacing = memo((props: Omit<Props, 'direction'>) => (
  <Spacing direction="horizontal" {...props} />
))
