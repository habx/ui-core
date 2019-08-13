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

export const GRID_ITEMS = [
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
  {
    props: {
      title: 'Plan envoyé',
      description: "Transmis avec succès à l'adresse indiquée.",
      illustration: (
        <img src="https://res.cloudinary.com/habx/image/upload/v1561731410/illustrations/habxmojies/sun-inlove.svg" />
      ),
    },
  },
]

const Grid = withGrid<NotificationProps>({
  lines: GRID_LINES,
  items: GRID_ITEMS,
  itemHorizontalSpace: 24,
  itemVerticalSpace: 24,
})(Notification)

storiesOf('Miscellaneous|Notification', module).add('grid', () => <Grid />)
