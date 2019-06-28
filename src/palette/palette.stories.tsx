import { storiesOf } from '@storybook/react'
import * as React from 'react'
import styled from 'styled-components'

import theme from '../theme'
import Title from '../Title'

import palette from './palette'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 64px;
`

const Line = styled.div`
  display: flex;
  align-items: center;
`

const ColorLabel = styled(Title).attrs(() => ({ type: 'columnTitle' }))`
  width: 170px;
`

const Color = styled.div`
  width: 100px;
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Circle = styled.div`
  height: 64px;
  width: 64px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  box-shadow: ${theme.raw.shadow};
`

storiesOf('Theme|palette', module).add('all colors', () => (
  <Container>
    {Object.entries(palette).map(([colorName, colorGradient]) => (
      <Line>
        <ColorLabel>{colorName}</ColorLabel>
        {[...Object.values(colorGradient).reverse()].map(color => (
          <Color>
            <Circle color={color} />
          </Color>
        ))}
      </Line>
    ))}
  </Container>
))
