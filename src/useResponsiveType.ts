import { isClientSide } from './_internal/ssr'
import { breakpoints } from './breakpoints'
import { useWindowWidth } from './useWindowSize'

export const useResponsiveType = (defaultValue = 'phone') => {
  const width = useWindowWidth()

  if (!isClientSide) {
    return defaultValue
  }

  const matchingBreakpoint = Object.entries(breakpoints.raw)
    .reverse()
    .find(([_, breakpointWidth]) => width <= breakpointWidth)

  return matchingBreakpoint ? (matchingBreakpoint[0] as string) : 'desktop'
}
