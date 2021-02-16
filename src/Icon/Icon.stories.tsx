import * as React from 'react'
import styled from 'styled-components'

import { Background } from '../Background'
import { palette } from '../palette'
import { Text } from '../Text'

import { Icon } from './Icon'
import { icons } from './Icon.data'

const GridContainer = styled(Background)`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 24px;
  padding: 32px;
`

const IconContainer = styled(Text)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-size: 32px;
`

const Grid = (props) => (
  <GridContainer
    backgroundColor={palette.neutralBlackWithIntensityFading[0]}
    {...props}
  >
    {icons.map((icon) => (
      <IconContainer key={icon}>
        <Icon icon={icon} />
        <br />
        <Text type="captionSmall">{icon}</Text>
      </IconContainer>
    ))}
  </GridContainer>
)

export default {
  title: 'Layouts/Icon',
  component: Icon,
}

export const gallery = () => <Grid />

gallery.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/xFbiz8LXs8yRdasUXgMJDn/Icons-%26-illustrations?node-id=10%3A2',
    },
  },
}

export const lightBackground = () => (
  <Grid backgroundColor={palette.neutralBlackWithIntensityFading[100]} />
)

export const darkBackground = () => (
  <Grid backgroundColor={palette.neutralBlackWithIntensityFading[900]} />
)
