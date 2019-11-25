import * as React from 'react'

export default interface MenuLineProps
  extends React.LiHTMLAttributes<HTMLLIElement> {
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  secondary?: boolean
  active?: boolean
}
