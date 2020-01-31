import { Button, styledAs } from '../_internal/types'
import { IconProps } from '../Icon'

export default interface IconButtonProps
  extends Button,
    Pick<IconProps, 'icon' | 'colored'> {
  as?: styledAs
  opacity?: number
}
