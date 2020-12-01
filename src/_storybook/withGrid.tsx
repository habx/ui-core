import * as React from 'react'
import styled from 'styled-components'

import { Background } from '../Background'
import { palette } from '../palette'
import { Text } from '../Text'
import { Title } from '../Title'

const StorybookGridContainer = styled(Background)`
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 24px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const StorybookGridContent = styled.div``

const LineContainer = styled.div`
  padding: 24px 36px;
`

const LineContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  margin: 8px -8px -8px -8px;
`

const ItemContainer = styled.div<{
  itemHorizontalSpace: number
  itemVerticalSpace: number
}>`
  margin: ${({ itemVerticalSpace }) => itemVerticalSpace}px
    ${({ itemHorizontalSpace }) => itemHorizontalSpace}px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const Label = styled(Text)`
  margin-top: 12px;
`

type GridLine<Props> = {
  title?: React.ReactNode
  props?: Partial<Props>
}

type GridItem<Props> = {
  label?: string
  props?: Partial<Props>
}

interface StorybookGridConfig<Props> {
  props?: Partial<Props>
  lines: GridLine<Props>[]
  items: GridItem<Props>[]
  itemHorizontalSpace?: number
  itemVerticalSpace?: number
  itemWrapper?: React.ComponentType<any>
  showBackgroundVariations?: boolean
}

export const withGrid = <Props extends object>(
  config: StorybookGridConfig<Props>
) => (WrappedComponent: React.ComponentType<Props>) => {
  const {
    props = {},
    lines,
    items,
    itemWrapper: ItemWrapper = React.Fragment,
    itemHorizontalSpace = 18,
    itemVerticalSpace = 12,
  } = config

  const Component: React.FunctionComponent<{
    background?: 'light' | 'dark' | 'none'
  }> = ({ background = 'none' }) => {
    const backgroundColor = React.useMemo(() => {
      switch (background) {
        case 'dark': {
          return palette.neutralBlackOpacity[900]
        }

        case 'light': {
          return palette.neutralBlackOpacity[300]
        }

        case 'none': {
          return '#FFFFFF'
        }

        default: {
          return '#FFFFFF'
        }
      }
    }, [background])

    return (
      <StorybookGridContainer backgroundColor={backgroundColor}>
        <StorybookGridContent>
          {lines.map((line, lineIndex) => {
            const content = (
              <LineContainer>
                <Title type="section">{line.title}</Title>
                <LineContent>
                  {items.map((item) => {
                    const fullProps = {
                      ...props,
                      ...line.props,
                      ...item.props,
                    } as Props

                    return (
                      <ItemContainer
                        itemHorizontalSpace={itemHorizontalSpace}
                        itemVerticalSpace={itemVerticalSpace}
                      >
                        <ItemWrapper>
                          <WrappedComponent {...fullProps} />
                        </ItemWrapper>
                        {item.label && (
                          <Label variation="title">{item.label} </Label>
                        )}
                      </ItemContainer>
                    )
                  })}
                </LineContent>
              </LineContainer>
            )

            return <React.Fragment key={lineIndex}>{content}</React.Fragment>
          })}
        </StorybookGridContent>
      </StorybookGridContainer>
    )
  }

  return Component
}
