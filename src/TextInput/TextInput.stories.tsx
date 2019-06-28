import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { withDesign } from 'storybook-addon-designs'
import styled from 'styled-components'

import Title from '../Title'

import TextInput from './index'

const StoryContainer = styled.div`
  margin: 64px;
`

const LineContainer = styled.div`
  margin-bottom: 48px;
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

const createLine = (title, props) => (
  <LineContainer>
    <Title type="columnTitle">{title}</Title>
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

storiesOf('Input|TextInput', module)
  .addDecorator(withDesign)
  .addDecorator(withKnobs)
  .add('gallery', () => (
    <StoryContainer>
      {createLine('Regular', {})}
      {createLine('Small', { small: true })}
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
