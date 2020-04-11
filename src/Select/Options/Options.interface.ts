import * as React from 'react'

import { EnrichedSelectOption } from '../Select.interface'

export default interface OptionsProps {
  options: EnrichedSelectOption[]
  open: boolean
  focusedOption?: any
  onSelect: (option: EnrichedSelectOption) => void
  onSelectAll: (value: boolean) => void
  selectAllLabel?: string
  allSelected: boolean
  onClose: () => void
  containerRef: React.RefObject<HTMLDivElement>
}
