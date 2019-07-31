import { withKnobs, boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { withDesign } from 'storybook-addon-designs'
import styled from 'styled-components'

import Background from '../Background'
import Button from '../Button'
import Icon from '../Icon'
import palette from '../palette'
import Text from '../Text'
import Title from '../Title'

import Card from './Card'
import CardProps from './Card.interface'

const StoryContainer = styled.div`
  margin: 64px;
`

const LineContainer = styled.div`
  padding: 12px 48px 36px 48px;
`

const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 8px -8px -8px -8px;

  & > div {
    margin: 8px;
  }
`

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

const CardChildren = () => (
  <CardChildrenContainer>
    <img src="https://vivreparis.fr/wp-content/uploads/2019/03/paris-louvre-record-touristes.png" />
    <CardChildrenContent>
      <Title type="regular">Paris</Title>
      <Text markdown>
        The **Louvre Museum** is the world's largest art museum and a historic
        monument in Paris, France.
      </Text>
      <Button link iconRight={<Icon icon="arrow-east" />}>
        Visit
      </Button>
    </CardChildrenContent>
  </CardChildrenContainer>
)

const createLine = (
  title: string,
  props: CardProps,
  { colored = false } = {}
) => {
  const content = (
    <LineContainer>
      <Title type="section">{title}</Title>
      <CardList>
        <Card {...props}>
          <CardChildren />
        </Card>
        <Card {...props} animated>
          <CardChildren />
        </Card>
        <Card {...props} flat>
          <CardChildren />
        </Card>
        <Card {...props} flat animated>
          <CardChildren />
        </Card>
      </CardList>
    </LineContainer>
  )

  return colored ? (
    <Background backgroundColor={palette.green[600]}>{content}</Background>
  ) : (
    content
  )
}

storiesOf('Miscellaneous|Card', module)
  .addDecorator(withDesign)
  .addDecorator(withKnobs)
  .add('gallery', () => (
    <StoryContainer>
      {createLine('White background', {})}
      {createLine('Colored background', {}, { colored: true })}
    </StoryContainer>
  ))
  .add('dynamic', () => (
    <Card animated={boolean('Animated', false)} flat={boolean('Flat', false)}>
      <CardChildren />
    </Card>
  ))
