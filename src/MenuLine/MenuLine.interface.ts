import * as React from 'react'

export default interface MenuLineProps
  extends React.LiHTMLAttributes<HTMLLIElement> {
  iconLeft?: JSX.Element
  iconRight?: JSX.Element
  secondary?: boolean
  active?: boolean
}
