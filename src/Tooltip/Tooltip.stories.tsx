import { withKnobs } from '@storybook/addon-knobs'
import * as React from 'react'

import withGrid from '../_internal/StorybookGrid'
import Button from '../Button'
import Icon from '../Icon'

import Tooltip from './Tooltip'
import TooltipProps from './Tooltip.interface'

const GRID_PROPS = {
  title: 'Lien copié !',
}

const GRID_LINES = [
  {
    title: 'Regular',
  },
  {
    title: 'Button as trigger',
    props: {
      children: <Button>Hover me</Button>,
    },
  },
  {
    title: 'Icon as trigger',
    props: {
      children: <Icon icon="calendar-outline" />,
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
})(Tooltip)

export default {
  title: 'Navigation/Tooltip',
  decorators: [withKnobs],
}

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
