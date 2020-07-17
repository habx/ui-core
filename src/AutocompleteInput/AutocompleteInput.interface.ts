import TextInputProps from '../TextInput/TextInput.interface'

export interface AutocompleteInputInnerProps extends TextInputProps {
  autocompleteOptions?: string[]
  onOptionSelect?: (option: string) => void
}

export default AutocompleteInputInnerProps

export type AutocompleteState = {
  open: boolean
  activeOptionIndex: number | null
}

export enum AutocompleteActionTypes {
  setOpen = 0,
  setActiveOptionIndex = 1,
  resetActiveOption = 2,
}

export type AutocompleteActions =
  | { type: AutocompleteActionTypes.setOpen; value: boolean }
  | { type: AutocompleteActionTypes.setActiveOptionIndex; value: number }
  | { type: AutocompleteActionTypes.resetActiveOption }
