import * as React from 'react'

export default interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  newTab?: boolean
}
