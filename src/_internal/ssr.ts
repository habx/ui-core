import * as React from 'react'

export const isClientSide: boolean = typeof document === 'object'

export const useSSRLayoutEffect = isClientSide
  ? React.useLayoutEffect
  : React.useEffect

export const ssrClientRect: ClientRect = {
  height: 0,
  width: 0,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
}
