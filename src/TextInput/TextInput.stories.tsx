import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { withDesign } from 'storybook-addon-designs'
import styled from 'styled-components'

import Background from '../Background'
import palette from '../palette'
import Title from '../Title'

import TextInput from './index'
import TextInputProps from './TextInput.interface'

const StoryContainer = styled.div`
  margin: 64px;
`

const LineContainer = styled.div`
  padding: 12px 48px 36px 48px;
`

const TextInputList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 8px -8px -8px -8px;

  & > button {
    margin: 8px;
  }
`

const TextInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding-right: 24px;
`

const createLine = (
  title: string,
  props: Partial<TextInputProps>,
  { colored = false } = {}
) => {
  const content = (
    <LineContainer>
      <Title type="section">{title}</Title>
      <TextInputList>
        <TextInputContainer>
          <TextInput placeholder="votre@mail.com" {...props} />
        </TextInputContainer>
        <TextInputContainer>
          <TextInput
            placeholder="votre@mail.com"
            value="habx@habx.fr"
            onChange={() => {}}
            {...props}
          />
        </TextInputContainer>
        <TextInputContainer>
          <TextInput
            placeholder="votre@mail.com"
            error
            value="06 01 01 01 01"
            onChange={() => {}}
            {...props}
          />
        </TextInputContainer>
        <TextInputContainer>
          <TextInput placeholder="votre@mail.com" disabled {...props} />
        </TextInputContainer>
      </TextInputList>
    </LineContainer>
  )

  return colored ? (
    <Background backgroundColor={palette.green[600]}>{content}</Background>
  ) : (
    content
  )
}

storiesOf('Input|TextInput', module)
  .addDecorator(withDesign)
  .addDecorator(withKnobs)
  .add('gallery', () => (
    <StoryContainer>
      {createLine('Regular', {})}
      {createLine('Small', { small: true })}
      {createLine('Colored background', {}, { colored: true })}
    </StoryContainer>
  ))
  .add('dynamic', () => (
    <TextInputContainer>
      <TextInput
        value={text('Value', '')}
        placeholder="votre@mail.com"
        error={boolean('Error', false)}
        small={boolean('Small', false)}
        disabled={boolean('Disabled', false)}
      />
    </TextInputContainer>
  ))
