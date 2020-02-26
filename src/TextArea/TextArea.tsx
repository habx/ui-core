import * as React from 'react'

import withLabel from '../withLabel'

import { TextAreaInnerProps } from './TextArea.interface'
import { Input } from './TextArea.style'

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaInnerProps>(
  (props, ref) => {
    const { small = false, error = false, ...rest } = props

    return <Input data-small={small} data-error={error} {...rest} ref={ref} />
  }
)

export default withLabel<HTMLTextAreaElement>({ orientation: 'vertical' })<
  TextAreaInnerProps
>(TextArea)
