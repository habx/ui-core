import { useTheme } from '../useTheme'

export const useHasColoredBackground = () => {
  const theme = useTheme()

  return theme.backgroundColor !== '#FFFFFF'
}
