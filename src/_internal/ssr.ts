import * as React from 'react'

export const isClientSide: boolean = typeof document === 'object'

export const useSSRLayoutEffect = isClientSide
  ? React.useLayoutEffect
  : React.useEffect
