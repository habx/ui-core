import { storiesOf } from '@storybook/react'
import * as React from 'react'
import styled from 'styled-components'

import Title from '../Title'

import theme from './theme'

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
  box-shadow: ${theme.shadow()};
`

storiesOf('Utility|theme', module).add('colors', () => (
  <Container>
    <Line>
      <ColorLabel />
      {Object.keys(Object.values(theme.raw.colors)[0]).map(colorName => (
        <Color>
          <Title type="columnTitle">{colorName}</Title>
        </Color>
      ))}
    </Line>
    {Object.entries(theme.raw.colors).map(
      ([colorFamilyName, colorFamilyVariations]) => (
        <Line>
          <ColorLabel>{colorFamilyName}</ColorLabel>
          {Object.values(colorFamilyVariations).map(color => (
            <Color>
              <Circle color={color} />
            </Color>
          ))}
        </Line>
      )
    )}
  </Container>
))
