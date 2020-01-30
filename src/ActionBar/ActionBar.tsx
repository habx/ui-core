import * as React from 'react'

import getFlattenedChildren from '../_internal/getFlattenedChildren'

import ActionBarProps from './ActionBar.interface'
import { ActionBarContainer } from './ActionBar.style'

const ActionBar = React.forwardRef<HTMLDivElement, ActionBarProps>(
  (props, ref) => {
    const { children: rawChildren, ...rest } = props

    const children = getFlattenedChildren(rawChildren)

    return (
      <ActionBarContainer
        {...rest}
        ref={ref}
        data-count={React.Children.count(children)}
      >
        {children}
      </ActionBarContainer>
    )
  }
)

export default ActionBar
