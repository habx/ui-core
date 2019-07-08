import * as React from 'react'

export default interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
}
