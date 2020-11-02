import * as React from 'react'
import styled from 'styled-components'

import { AutocompleteInput, AutocompleteInputProps } from './index'

const AutocompleteInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`

const AutocompleteTextInput = (props: AutocompleteInputProps) => {
  const [value, setValue] = React.useState('')

  return (
    <AutocompleteInputContainer>
      <AutocompleteInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        options={['Paris', 'Bordeaux', 'Nantes', 'Lyon']}
        {...props}
      />
    </AutocompleteInputContainer>
  )
}

export default {
  title: 'Input/AutocompleteInput',
  component: AutocompleteInput,
  argTypes: {
    placeholder: {
      defaultValue: 'Cities',
    },
  },
}

export const basic = (props: AutocompleteInputProps) => (
  <AutocompleteTextInput {...props} />
)
