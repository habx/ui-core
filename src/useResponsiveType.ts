import { useWindowWidth } from './_internal/hooks'
import { isClientSide } from './_internal/ssr'
import breakpoints from './breakpoints'

const useResponsiveType = (defaultValue = 'phone') => {
  const width = useWindowWidth()

  if (!isClientSide) {
    return defaultValue
  }

  Object.entries(breakpoints.raw)
    .reverse()
    .find(([_, breakpointWidth]) => width <= breakpointWidth)

  return 'phone'
  // return findLastKey(breakpoints.raw, el => width <= el)
}

export default useResponsiveType
