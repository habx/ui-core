import * as React from 'react'
import styled from 'styled-components'

import { Badge } from '../Badge'
import { Button } from '../Button'
import { Icon } from '../Icon'
import { Toggle } from '../Toggle'

import { SearchBar, SearchBarProps } from './index'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
`

const PanelContent = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 12px;
  }
`

export const basic = (props: SearchBarProps) => (
  <Container>
    <SearchBar
      {...props}
      triggerElement={
        <Button
          small
          ghost
          secondary
          elementLeft={<Badge content={2} />}
          elementRight={<Icon icon="settings-2" />}
        >
          Filter
        </Button>
      }
      renderPanel={() => (
        <PanelContent>
          <Toggle label="First filter" />
          <Toggle label="Second filter" />
          <Toggle label="Thirst filter" />
          <Toggle label="Fourth filter" />
        </PanelContent>
      )}
    />
  </Container>
)

basic.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=18%3A1845',
    },
  },
}

export default {
  title: 'Input/SearchBar',
  component: SearchBar,
}
