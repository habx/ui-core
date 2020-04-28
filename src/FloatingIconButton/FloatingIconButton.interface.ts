import { Button, styledAs } from '../_internal/types'
import { IconProps } from '../Icon'

export default interface FloatingIconButtonProps
  extends Omit<Button, 'large' | 'small'>,
    Pick<IconProps, 'icon' | 'colored'> {
  position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right'
  fixed?: boolean
  small?: boolean
  secondary?: boolean
  as?: styledAs
}
