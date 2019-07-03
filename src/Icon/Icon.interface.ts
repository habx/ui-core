import * as React from 'react'

export default interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  icon: string
  colored?: boolean
}
