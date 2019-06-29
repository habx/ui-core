import * as React from 'react'

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
