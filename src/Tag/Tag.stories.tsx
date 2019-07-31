import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { withDesign } from 'storybook-addon-designs'
import styled from 'styled-components'

import Background from '../Background'
import palette from '../palette'
import Title from '../Title'

import Tag from './Tag'
import TagProps from './Tag.interface'

const StoryContainer = styled.div`
  margin: 64px;
`

const LineContainer = styled.div`
  padding: 12px 48px 36px 48px;
`

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 8px -8px -8px -8px;

  & > button {
    margin: 8px;
  }
`

const createLine = (
  title: string,
  props: TagProps,
  { colored = false } = {}
) => {
  const content = (
    <LineContainer>
      <Title type="section">{title}</Title>
      <TagList>
        <Tag {...props}>Agencement 1</Tag>
        <Tag {...props} active>
          Agencement 1
        </Tag>
        <Tag large {...props}>
          Agencement 1
        </Tag>
      </TagList>
    </LineContainer>
  )

  return colored ? (
    <Background backgroundColor={palette.green[600]}>{content}</Background>
  ) : (
    content
  )
}

storiesOf('Actions|Tag', module)
  .addDecorator(withDesign)
  .addDecorator(withKnobs)
  .add('gallery', () => (
    <StoryContainer>
      {createLine('White background', {})}
      {createLine('Colored background', {}, { colored: true })}
    </StoryContainer>
  ))
  .add('dynamic', () => (
    <Tag
      children={text('Value', 'Agencement 1')}
      large={boolean('Large', false)}
      active={boolean('Active', false)}
      markdown={boolean('Markdown support', false)}
    />
  ))
