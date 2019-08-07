import * as React from 'react'

export default interface MenuLineProps
  extends React.LiHTMLAttributes<HTMLLIElement> {
  iconLeft?: JSX.Element
  iconRight?: JSX.Element
  primary?: boolean
  active?: boolean
}
