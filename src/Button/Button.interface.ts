import { Button, styledAs } from '../_internal/types'

export default interface ButtonProps extends Button {
  iconLeft?: JSX.Element
  iconRight?: JSX.Element
  outline?: boolean
  link?: boolean
  fullWidth?: boolean
  as?: styledAs
}
