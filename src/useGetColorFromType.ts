import { useThemeVariant } from './useThemeVariant'

export type ColorType = 'error' | 'info' | 'success' | 'warning'

export const useGetColorFromType = () => {
  const theme = useThemeVariant()

  return (type: ColorType) => {
    switch (type) {
      case 'error':
        return theme.colors.error.base
      case 'info':
        return theme.colors.secondary.base
      case 'success':
        return theme.colors.success.base
      case 'warning':
        return theme.colors.warning.base
    }
  }
}
