import * as React from 'react'

export interface MosaicProps {
  children: React.ReactNode[]
  columns?: number
  rounded?: boolean
  spacing?: boolean
}
