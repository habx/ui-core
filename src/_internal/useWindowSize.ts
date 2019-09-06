import * as React from 'react'

type SIZE = { width: number; height: number }

const DEFAULT_SIZE: SIZE = { width: 0, height: 0 }

const getSize = () => ({ width: window.innerWidth, height: window.innerHeight })

const useWindowSize = (): SIZE => {
  const hasWindow = typeof window === 'object'
  const [size, setSize] = React.useState<SIZE>(
    hasWindow ? getSize() : DEFAULT_SIZE
  )

  React.useEffect(() => {
    if (hasWindow) {
      const handleResize = () => setSize(getSize())

      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [hasWindow])

  return size
}

export default useWindowSize
