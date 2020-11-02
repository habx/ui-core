import colorUtils from 'color'

import { isNil } from '../_internal/data'

import { BASE_THEME } from './theme.data'
import { Shadow } from './theme.interface'
import {
  DesignSystemTheme,
  ColorFamilies,
  ColorVariations,
  Fonts,
  Shadows,
  GetterProps,
} from './theme.interface'

const getTheme = (
  props: GetterProps,
  { useRootTheme }: { useRootTheme?: boolean } = {}
): DesignSystemTheme => {
  const { theme: { uiCore = BASE_THEME, uiCoreRoot = BASE_THEME } = {} } = props

  return useRootTheme ? uiCoreRoot : uiCore
}

const fontGetter = (variation: keyof Fonts = 'text') => (props: GetterProps) =>
  getTheme(props).fonts[variation]

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

  const shadowObject: Shadow[] = getTheme(props).shadows[getShadowDepth()]

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
  config: {
    opacity?: number
    useRootTheme?: boolean
    dynamic?: boolean
    propName?: keyof Props
  } = {}
) => (
  props: Props & {
    warning?: boolean
    primary?: boolean
    secondary?: boolean
    opacity?: number
  }
) => {
  const { dynamic = false, useRootTheme = false, opacity, propName } = config

  const realOpacity = isNil(props.opacity) ? opacity : props.opacity

  const getColor = (): string => {
    const theme = getTheme(props, { useRootTheme })

    if (propName && !isNil(props[propName])) {
      return (props[propName] as any) as string
    }

    if (!dynamic) {
      return theme.textColor
    }

    if (props.warning) {
      return theme.colors.warning.base
    }

    if (props.primary) {
      return theme.colors.primary.base
    }

    if (props.secondary) {
      return theme.colors.secondary.base
    }

    return theme.textColor
  }

  const color = getColor()

  if (isNil(realOpacity)) {
    return color
  }

  return colorUtils(color)
    .fade(1 - realOpacity)
    .string()
}

const colorGetter = <Props extends GetterProps>(
  colorName: keyof ColorFamilies | 'background',
  config: {
    dynamic?: boolean
    useRootTheme?: boolean
    propName?: keyof Props
    variation?: keyof ColorVariations
    opacity?: number
  } = {}
) => {
  const {
    dynamic = false,
    useRootTheme = false,
    variation = 'base',
    propName,
    opacity,
  } = config

  return (
    props: Props & {
      warning?: boolean
      primary?: boolean
      secondary?: boolean
      opacity?: number
    }
  ) => {
    const theme = getTheme(props, { useRootTheme })

    const getColorName = (): keyof ColorFamilies => {
      if (colorName === 'background') {
        return 'primary'
      }

      if (!dynamic) {
        return colorName
      }

      if (props.warning) {
        return 'warning'
      }

      if (props.primary) {
        return 'primary'
      }

      if (props.secondary) {
        return 'secondary'
      }

      return colorName
    }

    const getColorValue = () => {
      if (propName && !isNil(props[propName])) {
        return props[propName]
      }

      if (colorName === 'background') {
        return theme.backgroundColor
      }

      return theme.colors[getColorName()][variation]
    }

    const realOpacity = isNil(props.opacity) ? opacity : props.opacity
    const color = getColorValue()

    if (isNil(realOpacity)) {
      return color
    }

    return colorUtils(color)
      .fade(1 - realOpacity)
      .string()
  }
}

export const theme = {
  color: colorGetter,
  textColor: textColorGetter,
  font: fontGetter,
  shadow: shadowGetter,
  raw: BASE_THEME,
}
