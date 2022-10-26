import * as React from 'react'

export interface MosaicProps {
    items: React.ReactNode[]
    columns?: number
    rounded?: boolean
    spacing?: boolean
}
