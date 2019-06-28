import { withKnobs, boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { withDesign } from 'storybook-addon-designs'
import styled from 'styled-components'

import TextInput from './index'

const TextInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`

storiesOf('Input|TextInput', module)
  .addDecorator(withDesign)
  .addDecorator(withKnobs)
  .add('dynamic', () => (
    <TextInputContainer>
      <TextInput
        placeholder="votre@mail.com"
        error={boolean('Error', false)}
        small={boolean('Small', false)}
      />
    </TextInputContainer>
  ))
