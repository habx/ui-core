import * as React from 'react'

export interface MosaicProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode[]
  columns?: number
  rounded?: boolean
  spacing?: boolean
}
