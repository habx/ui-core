import { withKnobs, boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { withDesign } from 'storybook-addon-designs'
import styled from 'styled-components'

import Text from '../Text'
import Title from '../Title'

import Checkbox from './index'

const StoryContainer = styled.div`
  margin: 64px;
`

const LineContainer = styled.div`
  margin-bottom: 48px;
`

const CheckboxList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 8px -8px -8px -8px;

  & > button {
    margin: 8px;
  }
`

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding-right: 24px;
`

const Label = props => <Text {...props} as="label" />

const CheckboxWithLabel = props => {
  const id = React.useRef(Math.random)

  return (
    <React.Fragment>
      <Checkbox {...props} id={id.current} />
      <Label htmlFor={id.current}>Exemple de label</Label>
    </React.Fragment>
  )
}

const createLine = (title, props) => (
  <LineContainer>
    <Title type="section">{title}</Title>
    <CheckboxList>
      <CheckboxContainer>
        <CheckboxWithLabel />
      </CheckboxContainer>
      <CheckboxContainer>
        <CheckboxWithLabel value onChange={() => {}} {...props} />
      </CheckboxContainer>
      <CheckboxContainer>
        <CheckboxWithLabel error value onChange={() => {}} {...props} />
      </CheckboxContainer>
      <CheckboxContainer>
        <CheckboxWithLabel disabled {...props} />
      </CheckboxContainer>
    </CheckboxList>
  </LineContainer>
)

storiesOf('Input|Checkbox', module)
  .addDecorator(withDesign)
  .addDecorator(withKnobs)
  .add('gallery', () => (
    <StoryContainer>{createLine('Regular', {})}</StoryContainer>
  ))
  .add('dynamic', () => (
    <CheckboxContainer>
      <CheckboxWithLabel
        value={boolean('Value', true)}
        placeholder="votre numéro"
        error={boolean('Error', false)}
        disabled={boolean('Disabled', false)}
      />
    </CheckboxContainer>
  ))
