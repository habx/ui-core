import React from 'react'

import { Icon } from '../Icon'

import { MosaicProps } from './Mosaic.interface'
import {
  GridContainer,
  MosaicItem,
  Item,
  FavouriteLayout,
  IconContainer,
} from './Mosaic.style'

export const Mosaic: React.FunctionComponent<MosaicProps> = (props) => {
  const structure = React.useMemo((): React.ReactNode[] => {
    const createMosaic = (items: React.ReactNode[], columnNumber: number) => {
      const mosaic = (
        <MosaicItem
          data-items-length={items.length}
          data-spacing={props.spacing}
        >
          {items
            .map((item, i) => (
              <Item
                key={`column-${columnNumber}-item-${i}`}
                data-rounded={props.rounded}
              >
                {item}
              </Item>
            ))
            .reverse()}
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
          ...buildColumns(
            items.slice(limit, items.length),
            remainingColumns - 1
          ),
        ]
      } else {
        return [items.length > 0 ? createMosaic(items, 1) : undefined]
      }
    }

    const columnsCount = !!props.columns
      ? props.columns
      : props.items.length > 3
      ? 4
      : props.items.length

    return buildColumns([...props.items].reverse(), columnsCount).reverse()
  }, [props.items])

  return <GridContainer data-spacing={props.spacing}>{structure}</GridContainer>
}
