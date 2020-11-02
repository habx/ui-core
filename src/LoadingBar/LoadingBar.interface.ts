import * as React from 'react'

export interface LoadingBarProps
  extends React.ButtonHTMLAttributes<HTMLDivElement> {
  loaded: number
  total: number
}
