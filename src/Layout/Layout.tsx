import * as React from 'react'

import { LayoutContext } from './Layout.context'
import {
  LayoutProps,
  LayoutChild,
  LayoutContextValue,
} from './Layout.interface'
import {
  LayoutTransparentContainer,
  LayoutColoredContainer,
} from './Layout.style'

export const Layout = React.forwardRef<HTMLDivElement, LayoutProps>(
  (props, ref) => {
    const { children, backgroundColor, ...rest } = props
    const [registeredChildren, setRegisteredChildren] = React.useState<
      Partial<Record<LayoutChild, number[]>>
    >({})

    const context = React.useMemo<LayoutContextValue>(
      () => ({
        isInLayout: true,
        registerChild: (type) => {
          const id = Math.random()
          setRegisteredChildren((prev) => ({
            ...prev,
            [type]: [...(prev[type] ?? []), id],
          }))

          return () =>
            setRegisteredChildren((prev) => ({
              ...prev,
              [type]: (prev[type] ?? []).filter((el) => el !== id),
            }))
        },
      }),
      []
    )

    const hasActionBar =
      (registeredChildren[LayoutChild.ActionBar]?.length ?? 0) > 0
    const hasHeaderBar =
      (registeredChildren[LayoutChild.HeaderBar]?.length ?? 0) > 0

    return (
      <LayoutContext.Provider value={context}>
        {backgroundColor ? (
          <LayoutColoredContainer
            ref={ref}
            {...rest}
            backgroundColor={backgroundColor}
            data-has-action-bar={hasActionBar}
            data-has-header-bar={hasHeaderBar}
          >
            {children}
          </LayoutColoredContainer>
        ) : (
          <LayoutTransparentContainer
            ref={ref}
            {...rest}
            data-has-action-bar={hasActionBar}
            data-has-header-bar={hasHeaderBar}
          >
            {children}
          </LayoutTransparentContainer>
        )}
      </LayoutContext.Provider>
    )
  }
)
