import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import withGrid from '../_internal/StorybookGrid'
import Button from '../Button'
import Icon from '../Icon'
import notify from '../notify'

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
      title: 'Blueprint sent by mail',
    },
  },
  {
    props: {
      title: 'Blueprint sent',
      illustration,
    },
  },
  {
    props: {
      title: 'Blueprint sent',
      description: 'Successfully sent to the given address',
      illustration,
    },
  },
  {
    props: {
      title: 'Blueprint sent',
      description: 'Successfully sent to the given address',
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

storiesOf('Miscellaneous|Notification', module)
  .addDecorator(withKnobs)
  .add('grid', () => <Grid />)
  .add('dynamic', () => (
    <Notification
      title={text('Title', 'Blueprint sent')}
      description={text(
        'Description',
        'Successfully sent to the given address'
      )}
      illustration={
        boolean('Illustration', true) ? (
          <img src="https://res.cloudinary.com/habx/image/upload/v1561731410/illustrations/habxmojies/sun-inlove.svg" />
        ) : null
      }
    />
  ))
  .add('event', () => (
    <Button
      onClick={() =>
        notify(GRID_ITEMS[Math.floor(Math.random() * GRID_ITEMS.length)].props)
      }
    >
      Notify me
    </Button>
  ))
