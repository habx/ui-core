import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import * as React from 'react'
import styled from 'styled-components'

import withGrid from '../_internal/StorybookGrid'
import Icon from '../Icon'

import Select from './Select'
import { longData } from './Select.data'
import SelectProps from './Select.interface'

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`

const TinySelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 120px;
`

const WrappedSelect: React.FunctionComponent<SelectProps> = (props) =>
  props.tiny ? (
    <TinySelectContainer>
      <Select {...props} />
    </TinySelectContainer>
  ) : (
    <SelectContainer>
      <Select {...props} />
    </SelectContainer>
  )

const GRID_PROPS = {
  placeholder: 'Regions',
  onChange: () => {},
  options: longData,
}

const GRID_LINES = [
  {
    title: 'Regular',
  },
  {
    title: 'Small',
    props: {
      small: true,
    },
  },
  {
    title: 'Tiny',
    props: {
      tiny: true,
    },
  },
  {
    title: 'Light',
    props: {
      light: true,
    },
  },
  {
    title: 'With label',
    props: {
      label: 'Pick a country',
    },
  },
]

const GRID_ITEMS = [
  {
    label: 'Empty',
    props: {},
  },
  {
    label: 'With value',
    props: {
      value: longData[2].value,
    },
  },
  {
    label: 'Filterable',
    props: {
      filterable: true,
    },
  },
  {
    label: 'Disabled',
    props: {
      disabled: true,
    },
  },
  {
    label: 'Multi',
    props: {
      multi: true,
      value: [longData[2].value, longData[4].value],
    },
  },
  {
    label: 'Can reset',
    props: {
      canReset: true,
    },
  },
  {
    label: 'Right element',
    props: {
      value: longData[2].value,
      elementRight: <Icon icon="house-building-outline" />,
    },
  },
]

const Grid = withGrid<SelectProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
})(WrappedSelect)

export default {
  title: 'Input/Select',
  decorators: [withKnobs],
}

export const gallery = () => <Grid />

export const lightBackground = () => <Grid background="light" />

export const darkBackground = () => <Grid background="dark" />

export const Dynamic = () => {
  const multi = boolean('Multi', false)
  const tiny = boolean('Tiny', false)
  const [multiValue, setMultiValue] = React.useState([longData[1].value])
  const [singleValue, setSingleValue] = React.useState(longData[1].value)

  const Wrapper = tiny ? TinySelectContainer : SelectContainer

  return (
    <Wrapper>
      <Select
        options={longData}
        disabled={boolean('Disabled', false)}
        light={boolean('Light', false)}
        small={boolean('Small', false)}
        filterable={boolean('Filterable', false)}
        canReset={boolean('Can Reset', true)}
        canSelectAll={boolean('Can Select All', false)}
        placeholder={text('Placeholder', '')}
        tiny={tiny}
        multi={multi}
        value={multi ? multiValue : singleValue}
        onChange={(newValue) => {
          if (multi) {
            setMultiValue(newValue)
          } else {
            setSingleValue(newValue)
          }
        }}
      />
    </Wrapper>
  )
}

gallery.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=18%3A1846',
    },
  },
}
