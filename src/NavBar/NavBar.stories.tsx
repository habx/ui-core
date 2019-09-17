import { storiesOf } from '@storybook/react'
import * as React from 'react'
import styled from 'styled-components'

import Icon from '../Icon'
import NavBarItem from '../NavBarItem'

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
    <NavBar>
      <NavBarItem icon={<Icon icon="home" />} tooltip="Accueil" active />
      <NavBarItem icon={<Icon icon="person" />} tooltip="Profil" />
    </NavBar>
  ))
  .add('with custom background color', () => (
    <NavBar backgroundColor="red">
      <NavBarItem icon={<Icon icon="home" />} tooltip="Accueil" active />
      <NavBarItem icon={<Icon icon="person" />} tooltip="Profil" />
    </NavBar>
  ))
  .add('with custom active color', () => (
    <NavBar activeBackgroundColor="green">
      <NavBarItem icon={<Icon icon="home" />} tooltip="Accueil" active />
      <NavBarItem icon={<Icon icon="person" />} tooltip="Profil" />
    </NavBar>
  ))
  .add('with custom active color on second item', () => (
    <NavBar>
      <NavBarItem icon={<Icon icon="home" />} tooltip="Accueil" active />
      <NavBarItem
        icon={<Icon icon="person" />}
        tooltip="Profil"
        activeBackgroundColor="blue"
      />
    </NavBar>
  ))
  .add('with title', () => (
    <NavBar title={<span>H</span>}>
      <NavBarItem icon={<Icon icon="home" />} tooltip="Accueil" active />
      <NavBarItem icon={<Icon icon="person" />} tooltip="Profil" />
    </NavBar>
  ))
  .add('with bottom elements', () => (
    <NavBar title={<span>H</span>}>
      <NavBarItem icon={<Icon icon="home" />} tooltip="Accueil" active />
      <NavBarItem icon={<Icon icon="person" />} tooltip="Profil" />
      <NavBarItem icon={<Icon icon="rss_feed" />} tooltip="Feed" bottom />
    </NavBar>
  ))
