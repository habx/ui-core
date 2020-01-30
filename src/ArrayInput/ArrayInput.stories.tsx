import { withKnobs, boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import styled from 'styled-components'

import withGrid from '../_internal/StorybookGrid'
import IconButton from '../IconButton'
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
          onChange={e =>
            onChange({ ...value, name: e.target.value as string }, index)
          }
        />
      </InputContainer>
      <InputContainer>
        <TextInput
          value={value.country}
          onChange={e =>
            onChange({ ...value, country: e.target.value as string }, index)
          }
        />
      </InputContainer>
    </React.Fragment>
  )
}

const CountryArrayInput: React.FunctionComponent<any> = props => {
  const [items, setItems] = React.useState(FIELDS)

  const handleChange = (value: field, index: number) =>
    setItems(prev => [...prev.slice(0, index), value, ...prev.slice(index + 1)])

  const handleAppend = () => setItems(prev => [...prev, DEFAULT_FIELD])

  const handleDelete = (index: number) =>
    setItems(prev => [...prev.slice(0, index), ...prev.slice(index + 1)])

  const handleReorder = (oldPosition: number, newPosition: number) => {
    setItems(prev => {
      const items = [...prev]

      items.splice(
        newPosition > oldPosition ? newPosition + 1 : newPosition,
        0,
        items[oldPosition]
      )
      items.splice(newPosition > oldPosition ? oldPosition : oldPosition + 1, 1)

      return items
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

const GRID_LINES = [{}]

const GRID_ITEMS = [
  {
    label: 'Default',
  },
  {
    label: 'Can be reordered',
    props: { canBeReordered: true },
  },
  {
    label: 'Custom',
    props: {
      addButtonComponent: () => <IconButton icon="add" />,
      renderItemTitle: ({ value }: { value: { name: string } }) => (
        <Title type="article">{value.name}</Title>
      ),
    },
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

storiesOf('Input|ArrayInput', module)
  .addDecorator(withKnobs)
  .add('galery', () => <Grid />)
  .add('light background', () => <Grid background="light" />)
  .add('dark background', () => <Grid background="dark" />)
  .add('dynamic', () => (
    <CountryArrayInput disabled={boolean('Disabled', false)} />
  ))
