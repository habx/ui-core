import * as React from 'react'

export default interface MenuLineProps
  extends React.LiHTMLAttributes<HTMLLIElement> {
  elementLeft?: React.ReactNode
  elementRight?: React.ReactNode
  secondary?: boolean
  active?: boolean
  warning?: boolean
}
