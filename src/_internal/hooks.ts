import * as React from 'react'

export const useWindowWidth = () => {
  const [width, setWidth] = React.useState(
    typeof window === 'object' ? window.innerWidth : 0
  )

  React.useEffect(() => {
    if (typeof window === 'object') {
      const handleResize = () => setWidth(window.innerWidth)

      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  return width
}

export const useIsSmallScreen = (breakpoint: number = 600) => {
  const width = useWindowWidth()

  return width <= breakpoint
}

export const useIsMounted = () => {
  const isMounted = React.useRef(true)

  React.useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [])

  return isMounted
}

export const useTimeout = () => {
  const timeouts = React.useRef([])
  const register = React.useRef(timeout => timeouts.current.push(timeout))

  React.useEffect(() => {
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      timeouts.current.forEach(timeout => {
        clearTimeout(timeout)
      })
    }
  }, [])

  return register.current
}
