import * as React from 'react'

import { CenteredComponent } from '../_storybook/CenteredComponent'
import { withGrid } from '../_storybook/withGrid'
import { Button } from '../Button'
import { IconButton } from '../IconButton'

import { Tooltip, TooltipProps } from './index'

const GRID_PROPS = {
  title: 'Lien copié !',
}

const GRID_LINES = [
  {
    title: 'Button as trigger',
    props: {
      children: <Button small>Hover me</Button>,
    },
  },
  {
    title: 'IconButton as trigger',
    props: {
      children: <IconButton icon="calendar-outline" />,
    },
  },
  {
    title: 'Light',
    props: {
      backgroundStyle: 'light',
      children: <IconButton icon="calendar-outline" />,
    },
  },
]

const GRID_ITEMS = [
  {
    label: 'Regular',
  },
  {
    label: 'Small',
    props: {
      small: true,
    },
  },
  {
    label: 'With description',
    props: {
      description:
        'Utilisée pour les arrivées d’eau et d’évacuation. Elle conditionne la proximité avec les pièces d’eau. Elle ne peut être déplacée.',
    },
  },
]

const Grid = withGrid<TooltipProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
  itemHorizontalSpace: 24,
  itemVerticalSpace: 48,
  itemWrapper: (props) => <span style={{ alignSelf: 'center' }} {...props} />,
})(Tooltip)

export default {
  title: 'Alerts/Tooltip',
  component: Tooltip,
  argTypes: {
    title: {
      defaultValue: 'This is the title',
    },
    description: {
      defaultValue: 'This is the description',
    },
  },
}

export const basic = (props: TooltipProps) => (
  <CenteredComponent>
    <Tooltip {...props}>
      <Button small>Hover me</Button>
    </Tooltip>
  </CenteredComponent>
)

basic.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=18%3A2116',
    },
  },
}

export const gallery = () => <Grid />
