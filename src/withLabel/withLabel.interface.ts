import { TextTypes } from '../Text/Text.interface'

type WithLabel<InnerProps extends {} = {}> = InnerProps & {
  label?: string
  labelType?: TextTypes
  error?: boolean
  disabled?: boolean
}

export default WithLabel
