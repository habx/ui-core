import * as React from 'react'
import styled from 'styled-components'

import { Button as BaseButton } from '../Button'
import { TabsBar } from '../TabsBar'
import { TabsBarItem } from '../TabsBarItem'
import { Text } from '../Text'

import { SidePanel } from './index'

const Wrapper = styled.div`
  min-height: 500px;
  max-height: 100vh;
`

const Container = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  &[data-open='true'] {
    opacity: 1;
  }
`

const Button = styled(BaseButton)`
  z-index: 101;
`

const WrappedSidePanel: React.FunctionComponent = () => {
  const [isOpened, setOpened] = React.useState(false)

  return (
    <React.Fragment>
      <Wrapper />
      <Button onClick={() => setOpened(true)}>Open Side Panel</Button>
      <Container data-open={isOpened}>
        <SidePanel
          title={'Example'}
          onClose={() => setOpened(false)}
          tabsBarContent={
            <React.Fragment>
              <TabsBar>
                <TabItem active={true}>Section 1</TabItem>
              </TabsBar>
            </React.Fragment>
          }
          navigationContent={<Text>Section content</Text>}
        />
      </Container>
    </React.Fragment>
  )
}

export const TabItem = styled(TabsBarItem)`
  font-size: 14px;
`

export default {
  title: 'Layouts/SidePanel',
  decorators: [WrappedSidePanel],
  component: SidePanel,
}

export const basic = () => {
  return (
    <React.Fragment>
      <SidePanel
        title={'Example'}
        onClose={() => {}}
        tabsBarContent={
          <React.Fragment>
            <TabsBar>
              <TabsBarItem active={true}>Section 1</TabsBarItem>
            </TabsBar>
          </React.Fragment>
        }
        navigationContent={<Text>Section content</Text>}
      />
    </React.Fragment>
  )
}
