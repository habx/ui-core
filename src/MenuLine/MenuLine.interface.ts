import * as React from 'react'

export default interface MenuLineProps
  extends React.LiHTMLAttributes<HTMLLIElement> {
  elemenftLeft?: React.ReactNode
  elementRight?: React.ReactNode
  secondary?: boolean
  active?: boolean
}
