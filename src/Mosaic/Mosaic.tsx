import React from 'react'

import { MosaicProps } from './Mosaic.interface'
import {
  GridContainer,
  RemainingItemsOverlay,
  MosaicItem,
  RemainingItemsContainer,
} from './Mosaic.style'

export const Mosaic = React.forwardRef<HTMLDivElement, MosaicProps>(
  ({ children, spacing, columns = 4, ...rest }, ref) => {
    const createMosaic = (
      items: React.ReactNode[],
      columnNumber: number,
      hasMoreValues?: boolean
    ) => {
      const childs = hasMoreValues
        ? [
            <RemainingItemsContainer key={'remaining_items'}>
              {items[0]}
              <RemainingItemsOverlay>
                +{children?.length - columns * 4}
              </RemainingItemsOverlay>
            </RemainingItemsContainer>,
            items.slice(1, 4).reverse(),
          ]
        : items

      return (
        <MosaicItem
          data-items-length={items.length}
          spacing={spacing}
          key={`column_${columnNumber}`}
        >
          {childs.reverse()}
        </MosaicItem>
      )
    }

    const buildColumns = (
      items: React.ReactNode[],
      remainingColumns: number,
      hasMoreValues = false
    ): React.ReactNode[] => {
      if (remainingColumns > 1) {
        const limit =
          items.length - remainingColumns < 4
            ? items.length - (remainingColumns - 1)
            : 4

        return [
          createMosaic(items.slice(0, limit), remainingColumns, hasMoreValues),
          ...buildColumns(
            items.slice(limit, items.length),
            remainingColumns - 1
          ),
        ]
      } else {
        return [items.length > 0 ? createMosaic(items, 1) : undefined]
      }
    }

    const columnsCount =
      children.length > columns - 1 ? columns : children.length

    const structure = buildColumns(
      [...children.slice(0, columns * 4)].reverse(),
      columnsCount,
      children?.length > columns * 4
    ).reverse()

    return (
      <GridContainer ref={ref} spacing={spacing} {...rest}>
        {structure}
      </GridContainer>
    )
  }
)
