import { useThemeVariant } from '../useThemeVariant'

export const useGetToasterBackgroundColorFromType = () => {
  const theme = useThemeVariant()
  return (type: 'info' | 'error' | 'warning') => {
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
