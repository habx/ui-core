import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { withDesign } from 'storybook-addon-designs'
import styled from 'styled-components'

import Title from '../Title'

import TextArea from './index'

const StoryContainer = styled.div`
  margin: 64px;
`

const LineContainer = styled.div`
  margin-bottom: 48px;
`

const TextAreaList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 8px -8px -8px -8px;

  & > button {
    margin: 8px;
  }
`

const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding-right: 24px;
`

const createLine = (title, props) => (
  <LineContainer>
    <Title type="section">{title}</Title>
    <TextAreaList>
      <TextAreaContainer>
        <TextArea placeholder="votre numéro" {...props} />
      </TextAreaContainer>
      <TextAreaContainer>
        <TextArea
          placeholder="votre numéro"
          value="06 11 11 11 11"
          onChange={() => {}}
          {...props}
        />
      </TextAreaContainer>
      <TextAreaContainer>
        <TextArea
          placeholder="votre numéro"
          error
          value="habx@habx.fr"
          onChange={() => {}}
          {...props}
        />
      </TextAreaContainer>
      <TextAreaContainer>
        <TextArea placeholder="votre numéro" disabled {...props} />
      </TextAreaContainer>
    </TextAreaList>
  </LineContainer>
)

storiesOf('Input|TextArea', module)
  .addDecorator(withDesign)
  .addDecorator(withKnobs)
  .add('gallery', () => (
    <StoryContainer>
      {createLine('Regular', {})}
      {createLine('Small', { small: true })}
    </StoryContainer>
  ))
  .add('dynamic', () => (
    <TextAreaContainer>
      <TextArea
        value={text('Value', '')}
        placeholder="votre numéro"
        error={boolean('Error', false)}
        disabled={boolean('Disabled', false)}
        small={boolean('Small', false)}
      />
    </TextAreaContainer>
  ))
