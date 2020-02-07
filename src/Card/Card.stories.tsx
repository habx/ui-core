import { withKnobs, boolean } from '@storybook/addon-knobs'
import * as React from 'react'
import styled from 'styled-components'

import withGrid from '../_internal/StorybookGrid'
import Button from '../Button'
import Icon from '../Icon'
import Text from '../Text'
import Title from '../Title'

import Card from './Card'
import CardProps from './Card.interface'

const CardChildrenContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  max-width: calc(100vw - 48px);

  & > img {
    width: 100%;
    height: auto;
  }
`

const CardChildrenContent = styled.div`
  padding: 12px 24px;

  & > *:not(button) {
    padding-bottom: 12px;
  }
`

export const CardChildren = () => (
  <CardChildrenContainer>
    <img
      alt="Illu"
      src="https://vivreparis.fr/wp-content/uploads/2019/03/paris-louvre-record-touristes.png"
    />
    <CardChildrenContent>
      <Title type="regular">Paris</Title>
      <Text markdown>
        The **Louvre Museum** is the world's largest art museum and a historic
        monument in Paris, France.
      </Text>
      <Button link elementRight={<Icon icon="arrow-east" />}>
        Visit
      </Button>
    </CardChildrenContent>
  </CardChildrenContainer>
)

const GRID_PROPS = {
  children: <CardChildren />,
}

const GRID_LINES = [{}]

const GRID_ITEMS = [
  {
    label: 'Default',
  },
  {
    label: 'Animated',
    props: { animated: true },
  },
  {
    label: 'Flat',
    props: { flat: true },
  },
  {
    label: 'Animated + Flat',
    props: { animated: true, flat: true },
  },
]

const Grid = withGrid<CardProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
})(Card)

export default {
  title: 'Layouts/Card',
  decorators: [withKnobs],
}

export const gallery = () => <Grid />

export const lightBackground = () => <Grid background="light" />

export const darkBackground = () => <Grid background="dark" />

export const dynamic = () => (
  <Card animated={boolean('Animated', false)} flat={boolean('Flat', false)}>
    <CardChildren />
  </Card>
)

gallery.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=4%3A0',
    },
  },
}
