import * as React from 'react'
import styled from 'styled-components'

import { CenteredComponent } from '../_storybook/CenteredComponent'
import { withGrid } from '../_storybook/withGrid'

import { TextInputList, TextInputListProps } from './index'

const TextInputListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`

const GRID_PROPS = {
  placeholder: 'Sartrouville',
  onChange: () => {},
}

const GRID_LINES = [
  {
    title: 'Regular',
  },
  {
    title: 'Small',
    props: { small: true },
  },
  {
    title: 'Light',
    props: { light: true },
  },
  {
    title: 'With label',
    props: {
      label: 'Mail address',
    },
  },
]

const GRID_ITEMS = [
  {
    label: 'Empty',
  },
  {
    label: 'With value',
    props: {
      value: ['Paris', 'Bordeaux'],
    },
  },
  {
    label: 'Error',
    props: {
      value: ['Paris', 'Bordeaux'],
      error: true,
    },
  },
  {
    label: 'Disabled',
    props: {
      disabled: true,
    },
  },
]

const Grid = withGrid<TextInputListProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
  itemWrapper: TextInputListContainer,
})(TextInputList)

export default {
  title: 'Input/TextInputList',
  component: TextInputList,
}

const AutoCompleteTextInput: React.FunctionComponent<
  Omit<TextInputListProps, 'value' | 'onChange' | 'options'>
> = () => {
  const [value, setValue] = React.useState<(string | number)[]>([])

  return (
    <TextInputList
      value={value}
      onChange={setValue}
      options={['Paris', 'Bordeaux', 'Nantes', 'Lyon']}
    />
  )
}

export const basic = (props: TextInputListProps) => (
  <CenteredComponent>
    <TextInputListContainer>
      <TextInputList {...props} />
    </TextInputListContainer>
  </CenteredComponent>
)

basic.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=18%3A1845',
    },
  },
}

export const autocomplete = (
  props: Omit<TextInputListProps, 'value' | 'onChange' | 'options'>
) => (
  <CenteredComponent>
    <TextInputListContainer>
      <AutoCompleteTextInput {...props} />
    </TextInputListContainer>
  </CenteredComponent>
)

export const gallery = () => <Grid />
