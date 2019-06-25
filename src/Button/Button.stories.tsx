import { storiesOf } from '@storybook/react'
import * as React from 'react'
import styled from 'styled-components'

import Button from './index'

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > * {
    margin-bottom: 24px;
  }
`

storiesOf('Actions|Button', module).add('full example', () => (
  <ButtonContainer>
    <Button>Click on me !</Button>
    <Button outline>Click on me !</Button>
    <Button disabled>Click on me !</Button>
    <Button outline disabled>
      Click on me !
    </Button>
    <Button small>Click on me !</Button>
    <Button large>Click on me !</Button>
  </ButtonContainer>
))
