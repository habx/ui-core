import { storiesOf } from '@storybook/react'
import * as React from 'react'

import Button from '../Button'
import { GRID_ITEMS } from '../Notification/Notification.stories'
import Provider from '../Provider'

import notify from './notify'

const thunderDecorator = (storyFn: Function) => <Provider>{storyFn()}</Provider>

storiesOf('Events|notify', module)
  .addDecorator(thunderDecorator)
  .add('basic', () => (
    <Button
      onClick={() =>
        notify(GRID_ITEMS[Math.floor(Math.random() * GRID_ITEMS.length)].props)
      }
    >
      Trigger event
    </Button>
  ))
