import * as React from 'react'

import { Card } from '../Card'
import { ExpansionPanel } from '../ExpansionPanel'

import { ExpansionCardProps } from './ExpansionCard.interface'
import { ExpansionPanelItem } from './ExpansionCard.style'

export const ExpansionCard = React.forwardRef<
  HTMLDivElement | HTMLButtonElement,
  ExpansionCardProps
>((props, ref) => {
  const {
    description,
    children,
    outline = true,
    spacing = 'narrow-horizontal-only',
    title,
    ...rest
  } = props

  return (
    <Card outline={outline} spacing={spacing} ref={ref}>
      <ExpansionPanel {...rest}>
        <ExpansionPanelItem title={title} description={description} inCard>
          {children}
        </ExpansionPanelItem>
      </ExpansionPanel>
    </Card>
  )
})
