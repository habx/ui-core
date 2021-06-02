import * as React from 'react'
import styled from 'styled-components'

import { withGrid } from '../_storybook/withGrid'
import { alert } from '../alert'
import { Button } from '../Button'
import { Card } from '../Card'
import { Text } from '../Text'
import { theme } from '../theme'

import { AlertBanner, AlertBannerProps } from './index'

const CardContainer = styled(Card)`
  height: 400px;
`

const CardChildrenContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100vw;
  background-color: ${theme.neutralColor(100)};
  padding: 12px 20px;
`

const WrappedAnnouncementBanner: React.FunctionComponent<
  Omit<AlertBannerProps, 'open'>
> = (props) => (
  <CardContainer>
    <AlertBanner open {...props} />
    <CardChildrenContainer>
      <Text>Content</Text>
    </CardChildrenContainer>
  </CardContainer>
)

const GRID_LINES = [
  {
    props: {
      message: 'Votre mot de passe a été modifié. Vous pouvez vous connecter',
    },
  },
  {
    props: {
      warning: true,
      message:
        'Le lien pour réinitaliser le mot de passe est expiré. Veuillez faire une nouvelle demande',
    },
  },
  {
    props: {
      onClose: () => {},
      message:
        'Le lien pour réinitaliser le mot de passe est expiré. Veuillez faire une nouvelle demande',
    },
  },
]

const GRID_ITEMS = [{}]

const Grid = withGrid<AlertBannerProps>({
  lines: GRID_LINES,
  items: GRID_ITEMS,
  itemHorizontalSpace: 24,
  itemVerticalSpace: 24,
})(WrappedAnnouncementBanner)

export default {
  title: 'Alerts/AlertBanner',
  component: AlertBanner,
  argTypes: {
    open: {
      defaultValue: true,
    },
  },
}

export const basic = (props: AlertBannerProps) => <AlertBanner {...props} />

basic.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=1828%3A13',
  },
}

export const gallery = () => <Grid />

export const event = () => (
  <Button
    onClick={() =>
      alert(
        GRID_LINES[Math.floor(Math.random() * GRID_LINES.length)]
          .props as AlertBannerProps
      )
    }
  >
    Alert me
  </Button>
)
