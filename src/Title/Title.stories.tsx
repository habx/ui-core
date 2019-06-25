import { storiesOf } from '@storybook/react'
import * as React from 'react'

import Title from './index'

import styled from 'styled-components'

const TitleContainer = styled.div``

storiesOf('Typography|Title', module)
  .add('full example', () => (
    <TitleContainer>
      TEST
    </TitleContainer>
  ))
