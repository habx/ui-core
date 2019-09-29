import * as React from 'react'

const useMousePosition = ({ skip }: { skip?: boolean } = {}) => {
  const [position, setPosition] = React.useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  })

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition(prev => {
        if (prev.x !== e.clientX || prev.y !== e.clientY) {
          return { x: e.clientX, y: e.clientY }
        }

        return prev
      })
    }

    if (!skip) {
      window.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [skip])

  return position
}

export default useMousePosition
