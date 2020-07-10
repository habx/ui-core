import * as React from 'react'
import styled from 'styled-components'

import HeaderBar from '../HeaderBar'
import TabsBarItem from '../TabsBarItem'

import TabsBar from './TabsBar'

const Container = styled.div`
  position: fixed;
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

const navDecorator = (storyFn: Function) => (
  <Container>
    <HeaderBar small>{storyFn()}</HeaderBar>
    <Content />
  </Container>
)

export default {
  title: 'Navigation/TabsBar',
  decorators: [navDecorator],
}

export const basic = () => (
  <TabsBar>
    <TabsBarItem active>Awesome page n°1</TabsBarItem>
    <TabsBarItem>Awesome page n°2</TabsBarItem>
  </TabsBar>
)
