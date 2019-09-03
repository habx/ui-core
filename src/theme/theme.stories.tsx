import { withKnobs, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { config } from 'storybook-addon-designs'
import styled from 'styled-components'

import Background from '../Background'
import Button from '../Button'
import palette from '../palette'
import Text from '../Text'
import TextInput from '../TextInput'
import Title from '../Title'
import useTheme from '../useTheme'

import theme from './theme'
import { THEME_PATCHES } from './theme.data'
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

const AnimationCard = styled.div`
  height: 300px;
  width: 300px;
  box-shadow: ${theme.shadow()};

  &:hover {
    animation: ${theme.animation('emerge', { duration: 'l' })};
  }
`

const ThemePatchContainer = styled.div`
  max-width: 520px;
  padding: 24px;
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 24px;
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
            {Object.values(colorFamilyVariations).map(
              (color: string, index) => (
                <Color key={index}>
                  <Circle color={color} />
                </Color>
              )
            )}
          </Line>
        )
      )}
    </Container>
  )
}

storiesOf('Utility|theme', module)
  .addDecorator(withKnobs)
  .add(
    'colors',
    () => (
      <Background
        backgroundColor={select(
          'Background color',
          Object.keys(THEME_PATCHES),
          '#FFFFFF'
        )}
      >
        <ThemePatchPalette />
      </Background>
    ),
    {
      design: config({
        type: 'figma',
        url:
          'https://www.figma.com/file/f5tJXjQSoOhy7K3r99pv21Fd/Brand-assets-%26-colors?node-id=8%3A3',
      }),
    }
  )
  .add(
    'shadows',
    () => (
      <Container>
        <Line>
          <ColorLabel type="section">Shadows</ColorLabel>
          {['lower', 'low', 'regular', 'high', 'higher'].map(shadowDepth => (
            <Color key={shadowDepth}>
              <Circle color="#FFFFFF" depth={shadowDepth} />
            </Color>
          ))}
        </Line>
      </Container>
    ),
    {
      design: config({
        type: 'figma',
        url:
          'https://www.figma.com/file/f5tJXjQSoOhy7K3r99pv21Fd/Brand-assets-%26-colors?node-id=10%3A214',
      }),
    }
  )

  .add(
    'animations',
    () => (
      <Container>
        <AnimationCard />
      </Container>
    ),
    {
      design: config({
        type: 'figma',
        url:
          'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=849%3A0',
      }),
    }
  )
  .add(
    'patches',
    () => (
      <Background
        backgroundColor={select(
          'Background color',
          Object.keys(THEME_PATCHES),
          palette.darkBlue[900]
        )}
      >
        <ThemePatchContainer>
          <Title type="section">Exemple de section colorée</Title>
          <TextInput placeholder="votre@mail.com" />
          <Text>
            Les volumes et la forme des pièces sont représentés à titre
            indicatif. Ils ne constituent pas le plan definitif de votre futur
            appartement mais bien une suggestion d'agencement. C'est notre
            architecte qui finalisera ce plan pour vous.
          </Text>
          <Button>Bouton</Button>
          <Button outline>Bouton outline</Button>
        </ThemePatchContainer>
      </Background>
    ),
    {
      design: config({
        type: 'figma',
        url:
          'https://www.figma.com/file/f5tJXjQSoOhy7K3r99pv21Fd/Brand-assets-%26-colors?node-id=8%3A3',
      }),
    }
  )
