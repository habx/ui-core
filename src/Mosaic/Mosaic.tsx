import React from 'react'

import { MosaicProps } from './Mosaic.interface'
import { GridContainer, MosaicItem } from './Mosaic.style'

export const Mosaic = React.forwardRef<HTMLDivElement, MosaicProps>(
  ({ children, spacing, rounded, columns, ...rest }, ref) => {
    const CreateMosaic = (items: React.ReactNode[]) => (
      <MosaicItem
        data-items-length={items.length}
        spacing={spacing}
        data-rounded={rounded}
        key={React.useId()}
      >
        {items.reverse()}
      </MosaicItem>
    )

    const buildColumns = (
      items: React.ReactNode[],
      remainingColumns: number
    ): React.ReactNode[] => {
      if (remainingColumns > 1) {
        const limit =
          items.length - remainingColumns < 4
            ? items.length - (remainingColumns - 1)
            : 4

        return [
          CreateMosaic(items.slice(0, limit)),
          ...buildColumns(
            items.slice(limit, items.length),
            remainingColumns - 1
          ),
        ]
      } else {
        return [items.length > 0 ? CreateMosaic(items) : undefined]
      }
    }

    const columnsCount = !!columns
      ? columns
      : children.length > 3
      ? 4
      : children.length

    const structure = buildColumns(
      [...children].reverse(),
      columnsCount
    ).reverse()

    return (
      <GridContainer ref={ref} spacing={spacing} {...rest}>
        {structure}
      </GridContainer>
    )
  }
)
