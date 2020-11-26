import { isNil } from '../_internal/data'
import { Color, stringifyColor, fadeColor } from '../_internal/theme/color'
import { ThemeOverridesProps } from '../_internal/types'
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

export const getCurrentBackground = (
  props: GetterProps,
  { useRootTheme }: { useRootTheme?: boolean } = {}
) => {
  const theme = props.theme?.uiCore

  if (!theme) {
    return palette.neutralWhite[1000]
  }

  const themeValue = useRootTheme ? theme.rootValue : theme.value

  return themeValue.backgroundColor
}

export const getThemeVariant = (
  props: GetterProps,
  { useRootTheme }: { useRootTheme?: boolean } = {}
): ThemeVariant => {
  const theme = props.theme?.uiCore

  if (!theme) {
    return DEFAULT_THEME.light
  }

  const themeValue = useRootTheme ? theme.rootValue : theme.value

  return themeValue.isDark ? themeValue.dark : themeValue.light
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
    `${x}px ${y}px ${blur}px rgba(24, 20, 31, ${opacity})`

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
) => (props: Props) => {
  const theme = getThemeVariant(props, { useRootTheme: config.useRootTheme })

  let color: Color

  if (config.valuePropName && props[config.valuePropName] != null) {
    color = (props[config.valuePropName] as any) as Color
  } else {
    let variation: keyof TypographyColors
    if (config.variationPropName && props[config.variationPropName] != null) {
      variation = (props[
        config.variationPropName
      ] as any) as keyof TypographyColors
    } else if (config.variation) {
      variation = config.variation
    } else {
      variation = 'text'
    }

    color = theme.typography.colors[variation]
  }

  return stringifyColor(color)
}

const colorGetter = <Props extends GetterProps>(
  colorFamily: keyof ColorFamilies | 'background',
  config: ColorGetterConfig<Props> = {}
) => {
  return (props: Props & ThemeOverridesProps & { opacity?: number }) => {
    const theme = getThemeVariant(props, { useRootTheme: config.useRootTheme })

    let color: Color

    if (config.valuePropName && props[config.valuePropName] != null) {
      color = (props[config.valuePropName] as any) as Color
    } else if (colorFamily === 'background') {
      color = getCurrentBackground(props, { useRootTheme: config.useRootTheme })
    } else {
      let realColorFamily: keyof ColorFamilies
      if (!config.dynamic) {
        realColorFamily = colorFamily
      } else if (props.error) {
        realColorFamily = 'error'
      } else if (props.warning) {
        realColorFamily = 'warning'
      } else if (props.primary) {
        realColorFamily = 'primary'
      } else if (props.secondary) {
        realColorFamily = 'secondary'
      } else {
        realColorFamily = colorFamily
      }

      color = theme.colors[realColorFamily][config.variation ?? 'base']
    }

    const opacity = props.opacity ?? config.opacity ?? 1
    if (opacity !== 1) {
      color = fadeColor(color, opacity)
    }
    return stringifyColor(color)
  }
}

const neutralColorGetter = <Props extends GetterProps>(
  strength: keyof FullGradient
) => (props: Props) =>
  stringifyColor(getThemeVariant(props).neutralColor[strength])

export const theme = {
  color: colorGetter,
  textColor: textColorGetter,
  neutralColor: neutralColorGetter,
  font: fontGetter,
  shadow: shadowGetter,
}
