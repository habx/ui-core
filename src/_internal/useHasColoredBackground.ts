import useTheme from '../useTheme'

const useHasColoredBackground = () => {
  const theme = useTheme()

  return theme.backgroundColor !== '#FFFFFF'
}

export default useHasColoredBackground
