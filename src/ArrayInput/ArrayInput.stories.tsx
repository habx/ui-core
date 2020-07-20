import { action } from '@storybook/addon-actions'
import { boolean, withKnobs, number } from '@storybook/addon-knobs'
import * as React from 'react'
import styled from 'styled-components'

import withGrid from '../_internal/StorybookGrid'
import Button from '../Button'
import Icon from '../Icon'
import Text from '../Text'
import TextInput from '../TextInput'
import Title from '../Title'

import ArrayInput from './ArrayInput'
import ArrayInputProps from './ArrayInput.interface'

type field = { name: string; country: string }
const FIELDS = [
  { name: 'Paris', country: 'France' },
  { name: 'London', country: 'United Kingdom' },
  { name: 'Madrid', country: 'Spain' },
]

const DEFAULT_FIELD = { name: '', country: '' }

const Context = React.createContext<{
  onChange: (value: any, index: number) => void
}>({
  onChange: () => {},
})

const Container = styled.div`
  width: 600px;
`

const InputContainer = styled.div`
  padding-bottom: 16px;
`

const CountryArrayInputElement = ({
  value,
  index,
}: {
  value: field
  index: number
}) => {
  const { onChange } = React.useContext(Context)
  return (
    <React.Fragment>
      <InputContainer>
        <TextInput
          value={value.name}
          onChange={(e) =>
            onChange({ ...value, name: e.target.value as string }, index)
          }
        />
      </InputContainer>
      <InputContainer>
        <TextInput
          value={value.country}
          onChange={(e) =>
            onChange({ ...value, country: e.target.value as string }, index)
          }
        />
      </InputContainer>
    </React.Fragment>
  )
}

const CountryArrayInput: React.FunctionComponent<any> = (props) => {
  const [items, setItems] = React.useState(FIELDS)

  const handleChange = (value: field, index: number) =>
    setItems((prev) => [
      ...prev.slice(0, index),
      value,
      ...prev.slice(index + 1),
    ])

  const handleAppend = () => setItems((prev) => [...prev, DEFAULT_FIELD])

  const handleDelete = (index: number) =>
    setItems((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)])

  const handleReorder = (oldPosition: number, newPosition: number) => {
    setItems((prev) => {
      const reorderedItems = [...prev]

      reorderedItems.splice(
        newPosition > oldPosition ? newPosition + 1 : newPosition,
        0,
        reorderedItems[oldPosition]
      )
      reorderedItems.splice(
        newPosition > oldPosition ? oldPosition : oldPosition + 1,
        1
      )

      return reorderedItems
    })
  }

  return (
    <Container>
      <Context.Provider value={{ onChange: handleChange }}>
        <ArrayInput
          items={items}
          onAppend={handleAppend}
          onDelete={handleDelete}
          onReorder={handleReorder}
          onOpen={action('open')}
          itemComponent={CountryArrayInputElement}
          itemTitleComponent={ItemTitle}
          {...props}
        />
      </Context.Provider>
    </Container>
  )
}

const ItemTitle: React.FunctionComponent<any> = ({ value }) => (
  <Text>
    {value.name ? `${value.name} (${value.country})` : 'Empty element'}
  </Text>
)

const GRID_PROPS = {}

const GRID_LINES = [
  {},
  {
    title: 'Can be reordered',
    props: { canBeReordered: true },
  },
  {
    title: 'Custom headers',
    props: {
      renderItemTitle: ({ value }: { value: { name: string } }) => (
        <Title type="regular">{value.name}</Title>
      ),
    },
  },
  {
    title: 'Custom add button',
    props: {
      addButtonComponent: ({ disabled }: { disabled?: boolean }) => (
        <Button disabled={disabled} link elementRight={<Icon icon="add" />}>
          Add
        </Button>
      ),
    },
  },
  {
    title: 'With label',
    props: {
      label: 'City list',
    },
  },
]

const GRID_ITEMS = [
  {
    label: 'Default',
  },
  {
    label: 'Disabled',
    props: { disabled: true },
  },
]

const Grid = withGrid<ArrayInputProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
  itemVerticalSpace: 48,
})(CountryArrayInput)

export default {
  title: 'Input/ArrayInput',
  decorators: [withKnobs],
}

export const gallery = () => <Grid />

export const lightBackground = () => <Grid background="light" />

export const darkBackground = () => <Grid background="dark" />

export const dynamic = () => (
  <CountryArrayInput
    disabled={boolean('Disabled', false)}
    opened={number('Currently opened item', -1)}
  />
)
