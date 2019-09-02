import * as React from 'react'

export default interface LoaderProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  colored?: boolean
  size?: 'large' | 'medium' | 'small'
  outline?: boolean
}
