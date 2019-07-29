import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { withDesign } from 'storybook-addon-designs'
import styled from 'styled-components'

import Background from '../Background'
import palette from '../palette'
import Title from '../Title'

import PasswordInput from './index'

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

const createLine = (title: string, props: Object, { colored = false } = {}) => {
  const content = (
    <LineContainer>
      <Title type="section">{title}</Title>
      <TextInputList>
        <TextInputContainer>
          <PasswordInput placeholder="votre mot de passe" {...props} />
        </TextInputContainer>
        <TextInputContainer>
          <PasswordInput
            placeholder="votre mot de passe"
            value="azerty :)"
            onChange={() => {}}
            {...props}
          />
        </TextInputContainer>
        <TextInputContainer>
          <PasswordInput
            placeholder="votre mot de passe"
            error
            value="a"
            onChange={() => {}}
            {...props}
          />
        </TextInputContainer>
        <TextInputContainer>
          <PasswordInput placeholder="votre mot de passe" disabled {...props} />
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

storiesOf('Input|PasswordInput', module)
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
      <PasswordInput
        value={text('Value', '')}
        placeholder="votre mot de passe"
        error={boolean('Error', false)}
        disabled={boolean('Disabled', false)}
        small={boolean('Small', false)}
      />
    </TextInputContainer>
  ))
