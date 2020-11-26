import * as React from 'react'

import { Background, BackgroundProps } from '../Background'
import { IconButton } from '../IconButton'
import { palette } from '../palette'
import { Text } from '../Text'

import { TogglePanel } from './TogglePanel'
import { TogglePanelProps } from './TogglePanel'

export default {
  title: 'Layouts/TogglePanel',
  component: TogglePanel,
}

const Component: React.FunctionComponent<
  BackgroundProps & Pick<TogglePanelProps, 'setStyle'>
> = ({ setStyle, ...props }) => (
  <TogglePanel
    setStyle={setStyle}
    triggerElement={<IconButton icon="three-dots" small />}
  >
    <Background {...props} style={{ padding: 12, ...props.style }} />
  </TogglePanel>
)

export const basic = () => (
  <Component backgroundColor={palette.greenNorthernLight[200]}>
    <Text>Panel content</Text>
  </Component>
)

export const nested = () => (
  <>
    <Component backgroundColor={palette.greenNorthernLight[200]}>
      <Text>Panel content at default placement</Text>

      <Component
        backgroundColor={palette.yellowSunlight[200]}
        setStyle={(_, triggerDimensions) => ({
          left: triggerDimensions.right,
          top: triggerDimensions.top,
          width: 300,
        })}
      >
        <Text>Nested content panel placed at the right</Text>
      </Component>
    </Component>
  </>
)
