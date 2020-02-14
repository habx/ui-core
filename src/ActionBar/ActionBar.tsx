import * as React from 'react'

import getFlattenedChildren from '../_internal/getFlattenedChildren'

import ActionBarProps from './ActionBar.interface'
import { ActionBarContainer, ActionBarContent } from './ActionBar.style'

const ActionBar = React.forwardRef<HTMLDivElement, ActionBarProps>(
  (props, ref) => {
    const { children: rawChildren, ...rest } = props

    const children = getFlattenedChildren(rawChildren)

    return (
      <ActionBarContainer {...rest} ref={ref}>
        <ActionBarContent data-count={React.Children.count(children)}>
          {React.Children.map(children, (child, index) => (
            <React.Fragment key={index}>{child}</React.Fragment>
          ))}
        </ActionBarContent>
      </ActionBarContainer>
    )
  }
)

export default ActionBar
