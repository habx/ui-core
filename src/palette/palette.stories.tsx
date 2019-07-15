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

const ColorLabel = styled(Title)`
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

storiesOf('Utility|palette', module).add('galery', () => (
  <Container>
    {Object.entries(palette).map(([colorName, colorGradient]) => (
      <Line>
        <ColorLabel type="section">{colorName}</ColorLabel>
        {Object.values(colorGradient)
          .reverse()
          .map((color: string, index) => (
            <Color key={index}>
              <Circle color={color} />
            </Color>
          ))}
      </Line>
    ))}
  </Container>
))
