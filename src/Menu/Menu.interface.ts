import * as React from 'react'

export default interface MenuProps
  extends React.HTMLAttributes<HTMLUListElement> {
  open?: boolean
}
