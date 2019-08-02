import * as React from 'react'
import styled from 'styled-components'

import Background from '../Background'
import palette from '../palette'
import Text from '../Text'
import Title from '../Title'

const StorybookGridContainer = styled.div`
  margin: 64px;
`

const LineContainer = styled.div`
  padding: 24px 36px;
`

const LineContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  margin: 8px -8px -8px -8px;
`

const ItemContainer = styled.div<{ itemHorizontalSpace: number }>`
  margin: 8px ${({ itemHorizontalSpace }) => itemHorizontalSpace}px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const Label = styled(Text)`
  margin-top: 12px;
`

type GridLine<Props> = {
  title: React.ReactNode
  props: Partial<Props>
  coloredBackground?: boolean
}

type GridItem<Props> = {
  label?: string
  props: Partial<Props>
}

interface StorybookGridConfig<Props> {
  props: Partial<Props>
  lines: GridLine<Props>[]
  items: GridItem<Props>[]
  itemHorizontalSpace?: number
  itemWrapper?: React.ComponentType<any>
}

const withGrid = <Props extends object>(config: StorybookGridConfig<Props>) => (
  WrappedComponent: React.ComponentType<Props>
) => {
  const {
    props,
    lines,
    items,
    itemWrapper: ItemWrapper = React.Fragment,
    itemHorizontalSpace = 8,
  } = config

  const Component: React.FunctionComponent<{}> = () => (
    <StorybookGridContainer>
      {lines.map(line => {
        const content = (
          <LineContainer>
            <Title type="section">{line.title}</Title>
            <LineContent>
              {items.map(item => {
                const fullProps = {
                  ...props,
                  ...line.props,
                  ...item.props,
                } as Props

                return (
                  <ItemContainer itemHorizontalSpace={itemHorizontalSpace}>
                    <ItemWrapper>
                      <WrappedComponent {...fullProps} />
                    </ItemWrapper>
                    {item.label && <Label opacity={1}>{item.label} </Label>}
                  </ItemContainer>
                )
              })}
            </LineContent>
          </LineContainer>
        )

        return line.coloredBackground ? (
          <Background backgroundColor={palette.green[600]}>
            {content}
          </Background>
        ) : (
          content
        )
      })}
    </StorybookGridContainer>
  )

  return Component
}

export default withGrid
