import * as React from 'react'

export const useTimeout = () => {
  const timeouts = React.useRef<number[]>([])
  const register = React.useRef((timeout: number) =>
    timeouts.current.push(timeout)
  )

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

export const useIsMounted = () => {
  const isMounted = React.useRef(true)

  React.useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [])

  return isMounted
}
