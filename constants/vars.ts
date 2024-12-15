// vars.ts
import { config } from '@/constants/token'
import { ColorScale, SemanticBackground, StaticIndicator, Vars } from '@/constants/types'
import { Appearance } from 'react-native'

const getColorScheme = () => Appearance.getColorScheme() ?? 'light'

const colorProxy = new Proxy({} as ColorScale, {
  get: (_, prop: string) => {
    const currentColorScheme = getColorScheme()
    const colorVar = `--color-${prop.replace(/([A-Z])|(\d+)/g, (match, letter, number) =>
      letter ? `-${letter.toLowerCase()}` : `-${number}`,
    )}` as const
    const rgbValue = config[currentColorScheme][colorVar]
    return `rgb(${rgbValue})`
  },
})

const backgroundProxy = new Proxy({} as SemanticBackground, {
  get: (_, prop: string) => {
    const currentColorScheme = getColorScheme()
    const colorVar = `--color-background-${prop.replace(/([A-Z])/g, '-$1').toLowerCase()}` as const
    const rgbValue = config[currentColorScheme][colorVar]
    return `rgb(${rgbValue})`
  },
})

const indicatorProxy = new Proxy({} as StaticIndicator, {
  get: (_, prop: string) => {
    const currentColorScheme = getColorScheme()
    const colorVar = `--color-indicator-${prop.replace(/([A-Z])/g, '-$1').toLowerCase()}` as const
    const rgbValue = config[currentColorScheme][colorVar]
    return `rgb(${rgbValue})`
  },
})

export const vars: Vars = {
  $scale: {
    color: colorProxy,
  },
  $semantic: {
    color: {
      background: backgroundProxy,
    },
  },
  $static: {
    color: {
      indicator: indicatorProxy,
    },
  },
} as const
