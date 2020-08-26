import * as React from 'react'

import getFlattenedChildren from '../_internal/getFlattenedChildren'
import { useParentLayout } from '../Layout'
import { LayoutChild } from '../Layout/Layout.interface'
import useTheme from '../useTheme'

import ActionBarProps from './ActionBar.interface'
import { ActionBarContainer, ActionBarContent } from './ActionBar.style'

export const ActionBar = React.forwardRef<HTMLDivElement, ActionBarProps>(
  (props, ref) => {
    const { children: rawChildren, ...rest } = props
    const parentLayout = useParentLayout()
    const theme = useTheme()

    const children = getFlattenedChildren(rawChildren)

    React.useLayoutEffect(() => {
      if (parentLayout.isInLayout) {
        return parentLayout.registerChild(LayoutChild.ActionBar)
      }
    }, [parentLayout])

    return (
      <ActionBarContainer
        backgroundColor={theme.backgroundColor}
        data-in-layout={parentLayout.isInLayout}
        {...rest}
        ref={ref}
      >
        <ActionBarContent data-count={React.Children.count(children)}>
          {React.Children.map(children, (child, index) => (
            <React.Fragment key={index}>{child}</React.Fragment>
          ))}
        </ActionBarContent>
      </ActionBarContainer>
    )
  }
)
