import { storiesOf } from '@storybook/react'
import * as React from 'react'
import styled from 'styled-components'

import { omit, pick } from '../_internal/data'
import Title from '../Title'

import theme from './theme'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 64px;
`

const Line = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Color = styled.div`
  width: 250px;
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Shadow = styled.div`
  width: 350px;
  padding: 48px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Card = styled.div`
  width: 250px;
  height: 250px;
  margin-bottom: 24px;
  box-shadow: ${({ shadow }) => shadow};
`

const Circle = styled.div`
  height: 64px;
  width: 64px;
  border-radius: 50%;
  border: 1px solid ${theme.light.neutral};
  background-color: ${({ color }) => color};
`

const Label = styled.div`
  padding-top: 8px;
`

const prepareTheme = currentTheme => {
  const colors = omit(currentTheme, [
    'shadow',
    'shadowLight',
    'shadowStrong',
    'name',
  ])

  const shadows = pick(currentTheme, ['shadow', 'shadowLight', 'shadowStrong'])

  const preparedColors = Object.entries(colors).reduce(
    (acc, [themeKey, color]) => {
      const category =
        ['primary', 'neutral'].find(category =>
          themeKey.startsWith(category)
        ) || 'misc'

      return {
        ...acc,
        [category]: { ...acc[category], [themeKey]: color },
      }
    },
    {}
  )

  return {
    colors: preparedColors,
    shadows,
  }
}

const ThemeGallery = props => {
  const { colors, shadows } = prepareTheme(props.theme)

  return (
    <Container>
      <Title size={2}>Colors</Title>
      {Object.entries(colors).map(([_, categoryColors]) => (
        <Line>
          {Object.entries(categoryColors).map(([name, color]) => (
            <Color>
              <Circle color={color} />
              <Label>{name}</Label>
            </Color>
          ))}
        </Line>
      ))}
      <Title size={2}>Box Shadows</Title>
      <Line>
        {Object.entries(shadows).map(([name, shadow]) => (
          <Shadow>
            <Card shadow={shadow} />
            <Label>{name}</Label>
          </Shadow>
        ))}
      </Line>
    </Container>
  )
}

storiesOf('Theme', module)
  .add('light theme', () => <ThemeGallery theme={theme.light} />)
  .add('dark theme', () => <ThemeGallery theme={theme.dark} />)
