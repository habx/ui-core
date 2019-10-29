import * as React from 'react'

export const isClientSide: boolean = typeof document === 'object'

export const useSSRLayoutEffect = isClientSide
  ? React.useLayoutEffect
  : React.useEffect

const SSR_DOM_RECT: DOMRect = {
  height: 0,
  width: 0,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  x: 0,
  y: 0,
  toJSON: () => '',
}

export const getDOMRect = () => (isClientSide ? new DOMRect() : SSR_DOM_RECT)
