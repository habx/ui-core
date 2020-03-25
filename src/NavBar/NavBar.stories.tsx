import * as React from 'react'
import styled from 'styled-components'

import Icon from '../Icon'
import MenuLine from '../MenuLine'
import NavBarItem from '../NavBarItem'
import NavBarMenuItem from '../NavBarMenuItem'

import NavBar from './NavBar'

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
`

const Content = styled.div`
  flex: 1 1 100%;
`

const navDecorator = (storyFn: Function) => (
  <Container>
    {storyFn()}
    <Content />
  </Container>
)

export default {
  title: 'Navigation/NavBar',
  decorators: [navDecorator],
}

export const basic = () => (
  <NavBar title="Projects" subtitle="v3.7.0">
    <NavBarItem
      icon={<Icon icon="house-building-outline" />}
      label="Programmes"
      active
    />
    <NavBarItem icon={<Icon icon="person-outline" />} label="Contacts" />
    <NavBarItem
      icon={<Icon icon="calendar-event-outline" />}
      label="Événements"
      description="Super event !"
    />
    <NavBarItem
      icon={<Icon icon="share" />}
      label="Partager le super long texte"
      disabled
    />
    <NavBarMenuItem icon={<Icon icon="settings" />} label="Mon compte" bottom>
      <MenuLine>Menu</MenuLine>
    </NavBarMenuItem>
  </NavBar>
)
