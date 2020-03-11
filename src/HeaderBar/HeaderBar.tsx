import * as React from 'react'

import { isNil } from '../_internal/data'
import { useParentLayout, LayoutChild } from '../Layout'

import HeaderBarProps from './HeaderBar.interface'
import { HeaderBarContainer } from './HeaderBar.style'

const HeaderBar = React.forwardRef<HTMLElement, HeaderBarProps>(
  (props, ref) => {
    const { children, progress, style, ...rest } = props

    const parentLayout = useParentLayout()

    React.useLayoutEffect(() => {
      if (parentLayout.isInLayout) {
        return parentLayout.registerChild(LayoutChild.HeaderBar)
      }
    }, [parentLayout])

    return (
      <HeaderBarContainer
        ref={ref}
        as="nav"
        data-has-progress={!isNil(progress)}
        data-is-in-layout={parentLayout.isInLayout}
        style={
          {
            ...(style ?? {}),
            '--header-bar-progress': progress,
          } as React.CSSProperties
        }
        {...rest}
      >
        {children}
      </HeaderBarContainer>
    )
  }
)

export default HeaderBar
