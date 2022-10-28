import React from 'react'

import { Icon } from '../Icon'

import { MosaicProps } from './Mosaic.interface'
import {
  GridContainer,
  MosaicItem,
  FavouriteLayout,
  IconContainer,
} from './Mosaic.style'

export const Mosaic: React.FunctionComponent<MosaicProps> = ({
  children,
  spacing,
  rounded,
  columns,
}) => {
  const createMosaic = (items: React.ReactNode[], columnNumber: number) => {
    const mosaic = (
      <MosaicItem
        data-items-length={items.length}
        data-spacing={spacing}
        data-rounded={rounded}
      >
        {items.map((item) => item).reverse()}
      </MosaicItem>
    )

    return columnNumber === 1 ? (
      <FavouriteLayout>
        {mosaic}
        <IconContainer>
          <Icon icon="star" />
        </IconContainer>
      </FavouriteLayout>
    ) : (
      mosaic
    )
  }

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
        createMosaic(items.slice(0, limit), remainingColumns),
        ...buildColumns(items.slice(limit, items.length), remainingColumns - 1),
      ]
    } else {
      return [items.length > 0 ? createMosaic(items, 1) : undefined]
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

  return <GridContainer data-spacing={spacing}>{structure}</GridContainer>
}
