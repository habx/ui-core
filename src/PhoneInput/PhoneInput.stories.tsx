import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { withDesign } from 'storybook-addon-designs'
import styled from 'styled-components'

import Title from '../Title'

import PhoneInput from './index'

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
    <Title type="section">{title}</Title>
    <TextInputList>
      <TextInputContainer>
        <PhoneInput placeholder="votre numéro" {...props} />
      </TextInputContainer>
      <TextInputContainer>
        <PhoneInput
          placeholder="votre numéro"
          value="06 11 11 11 11"
          onChange={() => {}}
          {...props}
        />
      </TextInputContainer>
      <TextInputContainer>
        <PhoneInput
          placeholder="votre numéro"
          error
          value="habx@habx.fr"
          onChange={() => {}}
          {...props}
        />
      </TextInputContainer>
      <TextInputContainer>
        <PhoneInput placeholder="votre numéro" disabled {...props} />
      </TextInputContainer>
    </TextInputList>
  </LineContainer>
)

storiesOf('Input|PhoneInput', module)
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
      <PhoneInput
        value={text('Value', '')}
        placeholder="votre numéro"
        error={boolean('Error', false)}
        disabled={boolean('Disabled', false)}
        small={boolean('Small', false)}
      />
    </TextInputContainer>
  ))
