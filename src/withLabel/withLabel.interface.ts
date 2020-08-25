import { TextTypes } from '../Text/Text.interface'

type WithLabel<InnerProps extends {} = {}> = InnerProps & {
  label?: string
  labelType?: TextTypes
  error?: boolean
  disabled?: boolean
}

export type WithSemanticLabel<Props extends {} = {}> = WithLabel<Props> & {
  id?: string
}

export default WithLabel
