import * as React from 'react'

export interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * @default true
   * @deprecated not used anymore
   */
  colored?: boolean

  /**
   * @default medium
   */
  size?: 'large' | 'medium' | 'small'

  /**
   * @default false
   * @deprecated not used anymore
   */
  outline?: boolean
}
