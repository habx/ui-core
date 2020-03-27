import * as React from 'react'

const BreadcrumbContext = React.createContext<{
  size: 'large' | 'small' | 'regular'
}>({ size: 'regular' })

export default BreadcrumbContext
