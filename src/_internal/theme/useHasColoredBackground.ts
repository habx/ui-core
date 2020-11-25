import { stringifyColor } from './color'
import { useCurrentBackground } from './useCurrentBackground'

export const useHasColoredBackground = () => {
  const backgroundColor = useCurrentBackground()

  return stringifyColor(backgroundColor) !== '#FFFFFF'
}
