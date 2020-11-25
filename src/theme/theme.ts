import { isNil } from '../_internal/data'
import { FullGradient, palette } from '../palette'

import { DEFAULT_THEME } from './theme.data'
import {
  ColorGetterConfig,
  Shadow,
  TextColorGetterConfig,
  ThemeVariant,
  TypographyColors,
} from './theme.interface'
import { ColorFamilies, Shadows, GetterProps } from './theme.interface'

export const getCurrentBackground = (props: GetterProps) =>
  props.theme?.uiCore?.backgroundColor ?? palette.white[1000]

export const getThemeVariant = (
  props: GetterProps,
  { useRootTheme }: { useRootTheme?: boolean } = {}
): ThemeVariant => {
  const theme = props.theme?.uiCore

  if (!theme) {
    return DEFAULT_THEME.light
  }

  const themeValue = useRootTheme ? theme.rootValue : theme.value

  return theme.isDark ? themeValue.dark : themeValue.light
}

const fontGetter = () => (props: GetterProps) =>
  getThemeVariant(props).typography.font

const shadowGetter = (
  depth: keyof Shadows = 'regular',
  config: {
    hover?: boolean
    dynamic?: boolean
    propName?: string
  } = {}
) => (props: GetterProps & { depth?: keyof Shadows }) => {
  const { hover = false, dynamic = false } = config

  const getShadowDepth = (): keyof Shadows => {
    if (dynamic && !isNil(props.depth)) {
      return props.depth
    }

    return depth
  }

  const shadowObject: Shadow[] = getThemeVariant(props).shadows[
    getShadowDepth()
  ]

  const buildShadow = ({ x, y, blur, opacity }: Shadow) =>
    `${x}px ${y}px ${blur}px rgba(6, 26, 60, ${opacity})`

  if (!hover) {
    return `${shadowObject.map(buildShadow).join(', ')}`
  }

  return `${shadowObject
    .map((shadow, index) =>
      buildShadow(
        index === 0
          ? { ...shadow, opacity: shadow.opacity + 0.1, y: shadow.y + 4 }
          : shadow
      )
    )
    .join(', ')}`
}

const textColorGetter = <Props extends GetterProps>(
  config: TextColorGetterConfig<Props> = {}
) => (props: Props & { textVariation?: keyof TypographyColors }) => {
  const theme = getThemeVariant(props, { useRootTheme: config.useRootTheme })

  if (config.valuePropName && props[config.valuePropName] !== null) {
    return (props[config.valuePropName] as any) as string
  }

  let variation: keyof TypographyColors
  if (props.textVariation) {
    variation = props.textVariation
  } else if (config.variation) {
    variation = config.variation
  } else {
    variation = 'text'
  }

  return theme.typography.colors[variation]
}

const colorGetter = <Props extends GetterProps>(
  colorFamily: keyof ColorFamilies | 'background',
  config: ColorGetterConfig<Props> = {}
) => {
  return (
    props: Props & {
      warning?: boolean
      primary?: boolean
      secondary?: boolean
      opacity?: number
    }
  ) => {
    const theme = getThemeVariant(props, { useRootTheme: config.useRootTheme })

    if (config.valuePropName && props[config.valuePropName] !== null) {
      return (props[config.valuePropName] as any) as string
    }

    if (colorFamily === 'background') {
      return getCurrentBackground(props)
    }

    let realColorFamily: keyof ColorFamilies
    if (!config.dynamic) {
      realColorFamily = colorFamily
    } else if (props.warning) {
      realColorFamily = 'warning'
    } else if (props.primary) {
      realColorFamily = 'primary'
    } else if (props.secondary) {
      realColorFamily = 'secondary'
    } else {
      realColorFamily = colorFamily
    }

    return theme.colors[realColorFamily][config.variation ?? 'base']
  }
}

const neutralColorGetter = <Props extends GetterProps>(
  strength: keyof FullGradient
) => (props: Props) => getThemeVariant(props).neutralColor[strength]

export const theme = {
  color: colorGetter,
  textColor: textColorGetter,
  neutralColor: neutralColorGetter,
  font: fontGetter,
  shadow: shadowGetter,
}
