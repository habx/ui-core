import * as React from 'react'

export default interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  small?: boolean
  error?: boolean
}
