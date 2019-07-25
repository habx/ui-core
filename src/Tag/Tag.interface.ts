import * as React from 'react'

export default interface Tag
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  large?: boolean
  active?: boolean
}
