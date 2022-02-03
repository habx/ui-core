import * as React from 'react'

export type LoadingBarProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * @default medium
   */
  size?: 'medium' | 'small'
} & ({ loaded: number; total: number } | { loaded?: never; total?: never })
