import * as React from 'react'

import withGrid from '../_storybook/withGrid'
import Button from '../Button'
import IconButton from '../IconButton'

import Tooltip from './Tooltip'
import TooltipProps from './Tooltip.interface'

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

export const gallery = () => <Grid />

gallery.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=18%3A2116',
    },
  },
}
