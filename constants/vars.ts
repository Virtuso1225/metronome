import { config } from '@/constants/token'
import { ColorScale, SemanticBackground, StaticIndicator, Vars } from '@/constants/types'
import { Appearance } from 'react-native'

let currentColorScheme = Appearance.getColorScheme() ?? 'light'

Appearance.addChangeListener(({ colorScheme }) => {
  currentColorScheme = colorScheme ?? 'light'
})

export const getCurrentColorScheme = () => currentColorScheme

const createColorProxy = (): ColorScale => {
  return new Proxy({} as ColorScale, {
    get: (_, prop: string) => {
      const colorScheme = getCurrentColorScheme()
      const colorVar = `--color-${prop.replace(/([A-Z])|(\d+)/g, (match, letter, number) =>
        letter ? `-${letter.toLowerCase()}` : `-${number}`,
      )}` as const
      const rgbValue = config[colorScheme][colorVar]
      return `rgb(${rgbValue})`
    },
  })
}

export const vars: Vars = {
  $scale: {
    color: createColorProxy(),
  },
  $semantic: {
    color: {
      background: new Proxy({} as SemanticBackground, {
        get: (_, prop: string) => {
          const colorScheme = getCurrentColorScheme()
          const colorVar = `--color-background-${prop.replace(/([A-Z])/g, '-$1').toLowerCase()}` as const
          const rgbValue = config[colorScheme][colorVar]
          return `rgb(${rgbValue})`
        },
      }),
    },
  },
  $static: {
    color: {
      indicator: new Proxy({} as StaticIndicator, {
        get: (_, prop: string) => {
          const colorScheme = getCurrentColorScheme()
          const colorVar = `--color-indicator-${prop.replace(/([A-Z])/g, '-$1').toLowerCase()}` as const
          const rgbValue = config[colorScheme][colorVar]
          return `rgb(${rgbValue})`
        },
      }),
    },
  },
} as const
