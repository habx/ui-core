import { ButtonProps } from '../Button'

export interface FloatingButtonProps
  extends Omit<ButtonProps, 'link' | 'ghost' | 'outline'> {
  position?: 'bottom' | 'top'
  fixed?: boolean
}
