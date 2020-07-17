import * as React from 'react'
import styled from 'styled-components'

import AutocompleteInput from '../AutocompleteInput'

const AutocompleteInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`

const AutocompleteTextInput = () => {
  const [value, setValue] = React.useState('')
  return (
    <AutocompleteInputContainer>
      <AutocompleteInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Cities"
        autocompleteOptions={['Paris', 'Bordeaux', 'Nantes', 'Lyon']}
      />
    </AutocompleteInputContainer>
  )
}

export default {
  title: 'Input/AutocompleteInput',
}

export const Basic = () => <AutocompleteTextInput />
