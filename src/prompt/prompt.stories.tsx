import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import styled from 'styled-components'

import withGrid from '../_internal/StorybookGrid'
import Button from '../Button'
import ButtonProps from '../Button/Button.interface'
import TextInput from '../TextInput'

import prompt from './prompt'

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 24px;
  }
`

export const ConfirmFormContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ConfirmFormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 32px;

  & > *:first-child {
    margin-right: 32px;
  }
`

const SmallForm: React.FunctionComponent<any> = ({ onSubmit }) => {
  const [input, setInput] = React.useState('')

  return (
    <FormContainer>
      <TextInput
        placeholder="Your name"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <Button onClick={() => onSubmit(input)}>Send !</Button>
    </FormContainer>
  )
}

const ConfirmForm: React.FunctionComponent<any> = ({ onSubmit }) => (
  <ConfirmFormContainer>
    <ConfirmFormActions>
      <Button warning onClick={() => onSubmit(false)}>
        NO
      </Button>
      <Button onClick={() => onSubmit(true)}>YES</Button>
    </ConfirmFormActions>
  </ConfirmFormContainer>
)

const GRID_PROPS = {
  children: 'Click me!',
}

const GRID_LINES = [{ title: 'Prompt modals' }]

const GRID_ITEMS = [
  {
    label: 'Simple input',
    props: {
      onClick: async () => {
        const response = await prompt(({ onResolve }) => ({
          title: 'Enter your name',
          children: <SmallForm onSubmit={onResolve} />,
          onClose: () => onResolve(''),
        }))

        action('Simple input Modal response')(response)
      },
    },
  },
  {
    label: 'Confirm',
    props: {
      onClick: async () => {
        const response = await prompt(({ onResolve }) => ({
          title: 'Are you sure ?',
          children: () => <ConfirmForm onSubmit={onResolve} />,
          onClose: () => onResolve(false),
        }))

        action('Confirm Modal response')(response)
      },
    },
  },
]

const Grid = withGrid<ButtonProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
  itemHorizontalSpace: 24,
})(Button)

storiesOf('Modals|prompt', module).add('grid', () => <Grid />)
