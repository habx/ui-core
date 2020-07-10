import * as React from 'react'

export default interface TabsBarItemProps
  extends React.LiHTMLAttributes<HTMLLIElement> {
  active?: boolean
  disabled?: boolean
}
