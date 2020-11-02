import { TextTypes } from '../Text'

export type WithLabel<InnerProps extends {} = {}> = InnerProps & {
  label?: string
  labelType?: TextTypes
  error?: boolean
  disabled?: boolean
}

export type WithSemanticLabel<Props extends {} = {}> = WithLabel<Props> & {
  id?: string
}
