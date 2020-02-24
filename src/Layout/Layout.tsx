import * as React from 'react'

import LayoutContext from './Layout.context'
import LayoutProps from './Layout.interface'
import { LayoutContainer } from './Layout.style'

const Layout = React.forwardRef<HTMLDivElement, LayoutProps>((props, ref) => {
  const { children, ...rest } = props
  const [actionBars, setActionBars] = React.useState<number[]>([])

  const context = React.useMemo(
    () => ({
      isInLayout: true,
      registerActionBar: () => {
        const id = Math.random()
        setActionBars(prev => [...prev, id])

        return () => setActionBars(prev => prev.filter(el => el !== id))
      },
    }),
    []
  )

  return (
    <LayoutContext.Provider value={context}>
      <LayoutContainer
        ref={ref}
        {...rest}
        data-has-action-bar={actionBars.length > 0}
      >
        {children}
      </LayoutContainer>
    </LayoutContext.Provider>
  )
})

export default Layout
