import { action } from '@storybook/addon-actions'
import { withKnobs, number, boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { withDesign } from 'storybook-addon-designs'
import styled from 'styled-components'

import Background from '../Background'
import palette from '../palette'
import Title from '../Title'

import NavigationDots from './index'
import NavigationDotsProps from './NavigationDots.interface'

const StoryContainer = styled.div`
  margin: 64px;
`

const LineContainer = styled.div`
  padding: 12px 48px 36px 48px;
`

const NavigationDotsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 8px -16px -8px -16px;

  & > div {
    margin: 8px 16px;
  }
`

const createLine = (
  title: string,
  props: Partial<NavigationDotsProps>,
  { colored = false } = {}
) => {
  const content = (
    <LineContainer>
      <Title type="section">{title}</Title>
      <NavigationDotsList>
        <NavigationDots {...props} size={3} activeDot={0} disabled />
        <NavigationDots
          {...props}
          size={3}
          activeDot={1}
          onClickDot={action('Click dot')}
        />
        <NavigationDots {...props} size={6} onClickDot={action('Click dot')} />
        <NavigationDots
          {...props}
          size={6}
          activeDot={3}
          onClickDot={action('Click dot')}
        />
        <NavigationDots
          {...props}
          size={6}
          activeDot={5}
          onClickDot={action('Click dot')}
        />
      </NavigationDotsList>
    </LineContainer>
  )

  return colored ? (
    <Background backgroundColor={palette.green[600]}>{content}</Background>
  ) : (
    content
  )
}

storiesOf('Actions|NavigationDots', module)
  .addDecorator(withDesign)
  .addDecorator(withKnobs)
  .add('gallery', () => (
    <StoryContainer>
      {createLine('Regular', {})}
      {createLine('Colored background', {}, { colored: true })}
    </StoryContainer>
  ))
  .add('dynamic', () => (
    <NavigationDots
      size={number('Size', 3)}
      activeDot={number('Active dot', 0)}
      disabled={boolean('Disabled', false)}
    />
  ))
