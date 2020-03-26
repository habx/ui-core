import { withKnobs } from '@storybook/addon-knobs'
import * as React from 'react'
import styled from 'styled-components'

import withGrid from '../_internal/StorybookGrid'
import Card from '../Card'
import palette from '../palette'
import Text from '../Text'

import AnnouncementBanner from './AnnouncementBanner'
import AnnouncementBannerProps from './AnnouncementBanner.interface'
const CardContainer = styled(Card)`
  height: 400px;
`

const CardChildrenContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100vw;
  background-color: ${palette.darkBlue[100]};
  padding: 12px 20px;
`

const WrappedAnnouncementBanner: React.FunctionComponent<Omit<
  AnnouncementBannerProps,
  'open' | 'onClose' | 'onValidate'
>> = (props) => {
  const [isOpened, setOpened] = React.useState(true)

  return (
    <CardContainer>
      <AnnouncementBanner
        open={isOpened}
        onClose={() => setOpened(false)}
        onValidate={() => setOpened(false)}
        {...props}
      />
      <CardChildrenContainer>
        <Text>Content</Text>
      </CardChildrenContainer>
    </CardContainer>
  )
}

const GRID_LINES = [{}]

const GRID_ITEMS = [
  {
    props: {
      validationLabel: 'Découvrir',
      message:
        'Professionels découvrez Match. Notre nouvelle solution de personnalisation en marque blanche.',
    },
  },
]

const Grid = withGrid<AnnouncementBannerProps>({
  lines: GRID_LINES,
  items: GRID_ITEMS,
  itemHorizontalSpace: 24,
  itemVerticalSpace: 24,
})(WrappedAnnouncementBanner)

export default {
  title: 'Alerts/AnnouncementBanner',
  decorators: [withKnobs],
}

export const gallery = () => <Grid />

gallery.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=1828%3A13',
    },
  },
}
