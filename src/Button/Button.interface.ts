import { Button } from '../_internal/types'

export default interface ButtonProps extends Button {
  iconLeft?: JSX.Element
  iconRight?: JSX.Element
  outline?: boolean
  fullWidth?: boolean
}
