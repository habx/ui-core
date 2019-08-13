import { storiesOf } from '@storybook/react'
import * as React from 'react'

import Button from '../Button'
import Provider from '../Provider'

import notify from './index'

const thunderDecorator = (storyFn: Function) => <Provider>{storyFn()}</Provider>

storiesOf('Events|notify', module)
  .addDecorator(thunderDecorator)
  .add('basic', () => (
    <Button onClick={() => notify('Plan envoyé')}>Trigger event</Button>
  ))
