export type ColorScale = {
  // Primary
  primary0: string
  primary50: string
  primary100: string
  primary200: string
  primary300: string
  primary400: string
  primary500: string
  primary600: string
  primary700: string
  primary800: string
  primary900: string
  primary950: string

  // Secondary
  secondary0: string
  secondary50: string
  secondary100: string
  secondary200: string
  secondary300: string
  secondary400: string
  secondary500: string
  secondary600: string
  secondary700: string
  secondary800: string
  secondary900: string
  secondary950: string

  // Tertiary
  tertiary0: string
  tertiary50: string
  tertiary100: string
  tertiary200: string
  tertiary300: string
  tertiary400: string
  tertiary500: string
  tertiary600: string
  tertiary700: string
  tertiary800: string
  tertiary900: string
  tertiary950: string

  // Error
  error0: string
  error50: string
  error100: string
  error200: string
  error300: string
  error400: string
  error500: string
  error600: string
  error700: string
  error800: string
  error900: string
  error950: string

  // Success
  success0: string
  success50: string
  success100: string
  success200: string
  success300: string
  success400: string
  success500: string
  success600: string
  success700: string
  success800: string
  success900: string
  success950: string

  // Warning
  warning0: string
  warning50: string
  warning100: string
  warning200: string
  warning300: string
  warning400: string
  warning500: string
  warning600: string
  warning700: string
  warning800: string
  warning900: string
  warning950: string

  // Info
  info0: string
  info50: string
  info100: string
  info200: string
  info300: string
  info400: string
  info500: string
  info600: string
  info700: string
  info800: string
  info900: string
  info950: string

  // Typography
  typography0: string
  typography50: string
  typography100: string
  typography200: string
  typography300: string
  typography400: string
  typography500: string
  typography600: string
  typography700: string
  typography800: string
  typography900: string
  typography950: string

  // Outline
  outline0: string
  outline50: string
  outline100: string
  outline200: string
  outline300: string
  outline400: string
  outline500: string
  outline600: string
  outline700: string
  outline800: string
  outline900: string
  outline950: string

  // Background
  background0: string
  background50: string
  background100: string
  background200: string
  background300: string
  background400: string
  background500: string
  background600: string
  background700: string
  background800: string
  background900: string
  background950: string
}

export type SemanticBackground = {
  error: string
  warning: string
  success: string
  muted: string
  info: string
}

export type StaticIndicator = {
  primary: string
  info: string
  error: string
}

export type Vars = {
  $scale: {
    color: ColorScale
  }
  $semantic: {
    color: {
      background: SemanticBackground
    }
  }
  $static: {
    color: {
      indicator: StaticIndicator
    }
  }
}
