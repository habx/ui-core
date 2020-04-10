export type Option = {
  label: string
  value: any
  disabled?: boolean
}

export default interface OptionsProps {
  options: Option[]
  open: boolean
  focusedItem?: any
  isOptionSelected: (option: Option) => boolean
  onSelect: (option: Option) => void
  onSelectAll: (value: boolean) => void
  selectAllLabel?: string
  allSelected: boolean
  onClose: () => void
  wrapperRect: ClientRect
}
