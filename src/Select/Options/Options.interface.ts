export type Option = {
  label: string
  value: any
}

export default interface OptionsProps {
  options: Option[]
  open: boolean
  compact: boolean
  description?: string
  annotation?: string
  focusedItem?: any
  multi: boolean
  isOptionSelected: (option: Option) => boolean
  onSelect: (option: Option) => void
  onSelectAll: (value: boolean) => void
  canSelectAll: boolean
  selectAllLabel?: string
  allSelected: boolean
  onClose: () => void
  optionDisabled: (option: any) => boolean
  wrapperRect: ClientRect
}
