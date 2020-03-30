import { styledAs } from '../_internal/types'
import { TextProps } from '../Text'

export default interface BreadcrumbItemProps extends Omit<TextProps, 'type'> {
  as?: styledAs
  interactive?: boolean
}
