import * as React from 'react'

export default interface OptionProps
  extends React.LiHTMLAttributes<HTMLLIElement> {
  focused: boolean
  label: React.ReactNode
  selected: boolean
  disabled?: boolean
}
