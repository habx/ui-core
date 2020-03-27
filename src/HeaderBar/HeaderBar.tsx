import * as React from 'react'

import { isNil } from '../_internal/data'
import { useParentLayout, LayoutChild } from '../Layout'

import HeaderBarProps from './HeaderBar.interface'
import { HeaderBarContainer } from './HeaderBar.style'

const HeaderBar = React.forwardRef<HTMLElement, HeaderBarProps>(
  (props, ref) => {
    const {
      children,
      progress,
      style,
      small,
      sticky,
      backgroundColor = '#FFFFFF',
      ...rest
    } = props

    const parentLayout = useParentLayout()

    React.useLayoutEffect(() => {
      if (parentLayout.isInLayout) {
        return parentLayout.registerChild(LayoutChild.HeaderBar)
      }
    }, [parentLayout])

    return (
      <HeaderBarContainer
        backgroundColor={backgroundColor}
        ref={ref}
        data-has-progress={!isNil(progress)}
        data-sticky={sticky}
        data-is-in-layout={parentLayout.isInLayout}
        data-small={small}
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
