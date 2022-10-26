import React from 'react'

import { MosaicProps } from './Mosaic.interface'
import { GridContainer, MosaicItem, Item } from './Mosaic.style'

export const Mosaic: React.FunctionComponent<MosaicProps> = (props) => {
  const structure = React.useMemo((): React.ReactNode[] => {
    const createMosaic = (items: React.ReactNode[]) => {
      return (
        <MosaicItem data-items-length={items.length}>
          {items
            .map((item, i) => (
              <Item
                key={`item-${i}`}
                data-spacing={props.spacing}
                data-rounded={props.rounded}
              >
                {item}
              </Item>
            ))
            .reverse()}
        </MosaicItem>
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
          createMosaic(items.slice(0, limit)),
          ...buildColumns(
            items.slice(limit, items.length),
            remainingColumns - 1
          ),
        ]
      } else {
        return [items.length > 0 ? createMosaic(items) : undefined]
      }
    }

    return buildColumns(
      [...props.items].reverse(),
      props.columns ?? 4
    ).reverse()
  }, [props.items])

  return <GridContainer>{structure}</GridContainer>
}
