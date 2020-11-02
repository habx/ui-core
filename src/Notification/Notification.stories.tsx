import * as React from 'react'

import { withGrid } from '../_storybook/withGrid'
import { Button } from '../Button'
import { Icon } from '../Icon'
import { notify } from '../notify'

import { Notification, NotificationProps } from './index'

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
        <img
          alt="Illu"
          src="https://res.cloudinary.com/habx/image/upload/v1561731410/illustrations/habxmojies/sun-inlove.svg"
        />
      ),
    },
  },
  {
    props: {
      title: 'Blueprint failed',
      description: 'Successfully sent to the given address',
      illustration,
      warning: true,
    },
  },
]

const Grid = withGrid<NotificationProps>({
  lines: GRID_LINES,
  items: GRID_ITEMS,
  itemHorizontalSpace: 24,
  itemVerticalSpace: 24,
})(Notification)

export default {
  title: 'Alerts/Notification',
  component: Notification,
  argTypes: {
    title: {
      defaultValue: 'Blueprint sent',
    },
    description: {
      defaultValue: 'Successfully sent to the given address',
    },
  },
}

export const basic = (props: NotificationProps) => <Notification {...props} />

basic.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=60%3A4',
    },
  },
}

export const gallery = () => <Grid />

export const event = () => (
  <Button
    onClick={() =>
      notify(GRID_ITEMS[Math.floor(Math.random() * GRID_ITEMS.length)].props)
    }
  >
    Notify me
  </Button>
)
