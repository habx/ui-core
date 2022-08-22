import * as React from 'react'

import { Title } from '../Title'

import { SidePanelProps } from './SidePanel.interface'
import { CloseButton, Container, Header, Tabs } from './SidePanel.style'

export const SidePanel: React.FunctionComponent<SidePanelProps> = ({
  onClose,
  tabsBarContent,
  title,
  navigationContent,
}) => {
  return (
    <Container>
      <Header>
        <Title type="section">{title}</Title>

        <CloseButton onClick={onClose} />
      </Header>

      {tabsBarContent && (
        <React.Fragment>
          <Tabs>{tabsBarContent}</Tabs>
          {navigationContent}
        </React.Fragment>
      )}
    </Container>
  )
}
