import * as React from 'react'

import LayoutContext from './Layout.context'
import LayoutProps from './Layout.interface'
import {
  LayoutTransparentContainer,
  LayoutColoredContainer,
} from './Layout.style'

const Layout = React.forwardRef<HTMLDivElement, LayoutProps>((props, ref) => {
  const { children, backgroundColor, ...rest } = props
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
      {backgroundColor ? (
        <LayoutColoredContainer
          ref={ref}
          {...rest}
          backgroundColor={backgroundColor}
          data-has-action-bar={actionBars.length > 0}
        >
          {children}
        </LayoutColoredContainer>
      ) : (
        <LayoutTransparentContainer
          ref={ref}
          {...rest}
          data-has-action-bar={actionBars.length > 0}
        >
          {children}
        </LayoutTransparentContainer>
      )}
    </LayoutContext.Provider>
  )
})

export default Layout
