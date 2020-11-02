import * as React from 'react'
import styled from 'styled-components'

import { Badge } from '../Badge'
import { HeaderBar } from '../HeaderBar'
import { MenuLine } from '../MenuLine'
import { TabsBarItem } from '../TabsBarItem'
import { TabsBarMenuItem } from '../TabsBarMenuItem'
import { Tooltip } from '../Tooltip'

import { TabsBar } from './index'

const Wrapper = styled.div`
  min-height: 500px;
  max-height: 100vh;
`

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
`

const Content = styled.div`
  flex: 1 1 100%;
`

const tabsBarDecorator = (storyFn: Function) => (
  <React.Fragment>
    <Wrapper />
    <Container>
      <HeaderBar small>{storyFn()}</HeaderBar>
      <Content />
    </Container>
  </React.Fragment>
)

export default {
  title: 'Navigation/TabsBar',
  component: TabsBar,
  subcomponents: { TabsBarItem },
  decorators: [tabsBarDecorator],
}

export const basic = () => (
  <TabsBar>
    <TabsBarItem active>Awesome page n°1</TabsBarItem>
    <TabsBarItem
      elementRight={
        <Tooltip title="You have 10 items to review on this tab" small>
          <Badge content={10} max={9} warning />
        </Tooltip>
      }
    >
      Awesome page n°2
    </TabsBarItem>
    <TabsBarMenuItem label="Awesome menu">
      <MenuLine>Sub page n°1</MenuLine>
      <MenuLine>Sub page n°2</MenuLine>
    </TabsBarMenuItem>
  </TabsBar>
)
