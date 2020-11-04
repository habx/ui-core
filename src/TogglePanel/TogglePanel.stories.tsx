import * as React from 'react'

import { Background } from '../Background'
import { IconButton } from '../IconButton'
import { Text } from '../Text'

import { TogglePanel } from '.'

export default {
  title: 'Layouts/TogglePanel',
  component: TogglePanel,
}

export const basic = () => (
  <TogglePanel triggerElement={<IconButton icon="three-dots" small />}>
    <Background backgroundColor="#fff" style={{ padding: 12 }}>
      <Text>Content</Text>
    </Background>
  </TogglePanel>
)
