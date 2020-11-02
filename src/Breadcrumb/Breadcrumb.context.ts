import * as React from 'react'

export const BreadcrumbContext = React.createContext<{
  size: 'large' | 'small' | 'regular'
}>({ size: 'regular' })
