import * as React from 'react'
import styled from 'styled-components'

import { Text } from '../Text'
import { theme } from '../theme'

import { palette } from './palette'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 64px;
`

const Line = styled.div`
  display: flex;
  align-items: center;
`

const ColorLabel = styled(Text)`
  width: 250px;
`

const Color = styled.div`
  width: 90px;
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

export default {
  title: 'Utility/palette',
}

export const gallery = () => (
  <Container>
    {Object.entries(palette).map(([colorName, colorGradient]) => (
      <Line key={colorName}>
        <ColorLabel variation="title">{colorName}</ColorLabel>
        {Object.values(colorGradient)
          .reverse()
          .map((color, index) => (
            <Color key={index}>
              <Circle color={color as string} />
            </Color>
          ))}
      </Line>
    ))}
  </Container>
)

gallery.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/f5tJXjQSoOhy7K3r99pv21Fd/Brand-assets-%26-colors?node-id=8%3A3',
    },
  },
}
