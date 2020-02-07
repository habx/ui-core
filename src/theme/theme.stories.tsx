import * as React from 'react'
import styled from 'styled-components'

import Title from '../Title'
import useTheme from '../useTheme'

import theme from './theme'
import { Shadows } from './theme.interface'

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
  width: 150px;
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Circle = styled.div<{ color?: string; depth?: keyof Shadows }>`
  height: 64px;
  width: 64px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  box-shadow: ${theme.shadow('regular', { dynamic: true })};
  transition: box-shadow 50ms ease-in-out;

  &:hover {
    box-shadow: ${theme.shadow('regular', { hover: true, dynamic: true })};
  }

  &:active {
    box-shadow: ${theme.shadow('lower')};
  }
`

const ThemePatchPalette = () => {
  const { colors } = useTheme()

  return (
    <Container>
      <Line>
        <ColorLabel type="section" />
        {Object.keys(Object.values(colors)[0]).map(colorName => (
          <Color key={colorName}>
            <Title type="section">{colorName}</Title>
          </Color>
        ))}
      </Line>
      {Object.entries(colors).map(
        ([colorFamilyName, colorFamilyVariations]) => (
          <Line key={colorFamilyName}>
            <ColorLabel type="section">{colorFamilyName}</ColorLabel>
            {Object.values(colorFamilyVariations).map((color, index) => (
              <Color key={index}>
                <Circle color={color as string} />
              </Color>
            ))}
          </Line>
        )
      )}
    </Container>
  )
}

export default {
  title: 'Utility/theme',
}

export const colors = () => <ThemePatchPalette />

colors.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/f5tJXjQSoOhy7K3r99pv21Fd/Brand-assets-%26-colors?node-id=8%3A3',
    },
  },
}

export const shadows = () => (
  <Container>
    <Line>
      <ColorLabel type="section">Shadows</ColorLabel>
      {(['lower', 'low', 'regular', 'high', 'higher'] as (keyof Shadows)[]).map(
        shadowDepth => (
          <Color key={shadowDepth}>
            <Circle color="#FFFFFF" depth={shadowDepth} />
          </Color>
        )
      )}
    </Line>
  </Container>
)

shadows.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/f5tJXjQSoOhy7K3r99pv21Fd/Brand-assets-%26-colors?node-id=10%3A214',
    },
  },
}
