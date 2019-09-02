import * as React from 'react'

const useUniqID = (defaultId?: string): string => {
  const idRef = React.useRef<string | null>(null)

  if (idRef.current === null) {
    if (defaultId) {
      idRef.current = defaultId
    } else {
      idRef.current = `${Math.random()}`
    }
  }

  return idRef.current
}

export default useUniqID
