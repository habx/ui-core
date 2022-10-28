import { debounce } from 'lodash'
import * as React from 'react'

import { isClientSide } from './_internal/ssr'

const HeightContext = React.createContext(0)

const WidthContext = React.createContext(0)

const SubscriptionContext = React.createContext<(() => () => void) | null>(null)

export const Provider: React.FunctionComponent<React.PropsWithChildren<{}>> = (
  props
) => {
  const [subscribers, setSubscribers] = React.useState(0)

  const [dimension, setDimension] = React.useState(
    isClientSide ? [window.innerWidth, window.innerHeight] : [0, 0]
  )

  const dimensionRef = React.useRef(dimension)

  dimensionRef.current = dimension

  const handler = React.useMemo(
    () =>
      debounce(() => {
        if (
          window.innerWidth !== dimensionRef.current[0] ||
          window.innerHeight !== dimensionRef.current[1]
        ) {
          setDimension([window.innerWidth, window.innerHeight])
        }
      }, 200),
    []
  )

  const hasListeners = Boolean(subscribers)

  React.useEffect(() => {
    if (!isClientSide) {
      return
    }

    if (hasListeners) {
      window.addEventListener('resize', handler)

      return () => window.removeEventListener('resize', handler)
    }

    window.removeEventListener('resize', handler)
  }, [handler, hasListeners])

  const subscription = React.useCallback(
    () => () => {
      setSubscribers((i) => i + 1)

      return () => setSubscribers((i) => i - 1)
    },
    []
  )

  return (
    <SubscriptionContext.Provider value={subscription}>
      <WidthContext.Provider value={dimension[0]}>
        <HeightContext.Provider {...props} value={dimension[1]} />
      </WidthContext.Provider>
    </SubscriptionContext.Provider>
  )
}

const useListener = () => {
  const subscription = React.useContext(SubscriptionContext)

  React.useEffect(() => {
    if (!subscription) {
      // TODO: use import.meta.env when migrating to vitejs
      if (process.env.NODE_ENV !== 'production') {
        console.warn(`'useWindow' hooks called outside their context.`) // eslint-disable-line no-console
      }
      return
    }
    return subscription()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
}

export const useWindowSize = () => {
  useListener()

  const height = React.useContext(HeightContext)
  const width = React.useContext(WidthContext)

  return React.useMemo(() => ({ height, width }), [height, width])
}

export const useWindowHeight = () => {
  useListener()

  return React.useContext(HeightContext)
}

export const useWindowWidth = () => {
  useListener()

  return React.useContext(WidthContext)
}
