import * as React from 'react'

import { styledAs } from '../_internal/types'
import { WithLabel } from '../withLabel'

export interface TextInputInnerProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  small?: boolean
  error?: boolean
  light?: boolean
  as?: styledAs
  elementRight?: React.ReactNode
  elementLeft?: React.ReactNode
  canReset?: boolean
  autocompleteOptions?: string[]
  onOptionSelect?: (option: string) => void
}

export default interface TextInputProps
  extends WithLabel<TextInputInnerProps> {}

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
