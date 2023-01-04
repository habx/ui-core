import * as React from 'react'

type Unit = '%' | 'px' | 'em' | 'vh' | 'vh'

export type Spacing = `${number}${Unit}`

export interface MosaicProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode[]
  columns?: number
  spacing?: Spacing
}
