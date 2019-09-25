import { storiesOf } from '@storybook/react'
import * as React from 'react'
import styled from 'styled-components'

import Icon from '../Icon'
import NavBarItem from '../NavBarItem'
import palette from '../palette'

import NavBar from './index'

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

storiesOf('Navigation|NavBar', module)
  .addDecorator(navDecorator)
  .add('basic', () => (
    <NavBar title="Home">
      <NavBarItem
        icon={<Icon icon="house-building-outline" />}
        label="Programmes"
        active
      />
      <NavBarItem icon={<Icon icon="person-outline" />} label="Contacts" />
      <NavBarItem icon={<Icon icon="calendar-event" />} label="Événements" />
      <NavBarItem icon={<Icon icon="share" />} label="Partager" disabled />
      <NavBarItem icon={<Icon icon="settings" />} label="Mon compte" bottom />
    </NavBar>
  ))
