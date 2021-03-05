import { useThemeVariant } from './useThemeVariant'

export type ColorType = 'info' | 'error' | 'warning'

export const useGetColorFromType = () => {
  const theme = useThemeVariant()
  return (type: ColorType) => {
    switch (type) {
      case 'error':
        return theme.colors.error.base
      case 'warning':
        return theme.colors.warning.base
      case 'info':
        return theme.colors.secondary.base
    }
  }
}
