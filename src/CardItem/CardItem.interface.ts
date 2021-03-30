import * as React from 'react'

export interface CardItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode
  disabled?: boolean
}
