import { storiesOf } from '@storybook/react'
import * as React from 'react'

import withGrid from '../_internal/StorybookGrid'
import Icon from '../Icon'

import Notification from './Notification'
import NotificationProps from './Notification.interface'

const illustration = <Icon icon="paperClip" />

const GRID_LINES = [
  {
    title: 'Toaster messages',
  },
]

const GRID_ITEMS = [
  {
    props: {
      title: 'Plan envoyé sur votre adresse email',
    },
  },
  {
    props: {
      title: 'Plan envoyé',
      illustration,
    },
  },
  {
    props: {
      title: 'Plan envoyé',
      description: "Transmis avec succès à l'adresse indiquée.",
      illustration,
    },
  },
]

const Grid = withGrid<NotificationProps>({
  lines: GRID_LINES,
  items: GRID_ITEMS,
})(Notification)

storiesOf('Miscellaneous|Notification', module).add('grid', () => <Grid />)
