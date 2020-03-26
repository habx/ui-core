export type Option = {
  label: string
  value: any
}

export default interface OptionsProps {
  options: Option[]
  open: boolean
  description?: string
  annotation?: string
  focusedItem?: any
  isOptionSelected: (option: Option) => boolean
  onSelect: (option: Option) => void
  onSelectAll: (value: boolean) => void
  selectAllLabel?: string
  allSelected: boolean
  onClose: () => void
  optionDisabled: (option: any) => boolean
  wrapperRect: ClientRect
}
