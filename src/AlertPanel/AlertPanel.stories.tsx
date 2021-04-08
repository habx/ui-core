import * as React from 'react'
import styled from 'styled-components'

import { withGrid } from '../_storybook/withGrid'
import { Icon } from '../Icon'

import { AlertPanel, AlertPanelProps } from './index'

const Container = styled.div`
  max-width: 400px;
  margin: auto;
`

const GRID_LINES = [
  {
    props: {
      children:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque autem dignissimos ea eum, expedita id ipsam, libero maxime neque, obcaecati officia possimus quod quos reiciendis sint tempora tenetur velit!',
    },
  },
  {
    title: 'With icon',
    props: {
      icon: <Icon icon="information-round" />,
      children:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque autem dignissimos ea eum, expedita id ipsam, libero maxime neque, obcaecati officia possimus quod quos reiciendis sint tempora tenetur velit!',
    },
  },
  {
    title: 'With illustration',
    props: {
      illustration: (
        <img
          src="//res.cloudinary.com/habx/image/upload/illustrations/habxmojies/paint-bucket.svg"
          alt="illustration"
        />
      ),
      children:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque autem dignissimos ea eum, expedita id ipsam, libero maxime neque, obcaecati officia possimus quod quos reiciendis sint tempora tenetur velit!',
    },
  },
]

const GRID_ITEMS = [
  {
    label: 'Normal',
    props: {
      title: 'Title',
    },
  },
  {
    label: 'Success',
    props: {
      title: 'Title',
      success: true,
    },
  },
  {
    label: 'Warning',
    props: {
      title: 'Title',
      warning: true,
    },
  },
  {
    label: 'Error',
    props: {
      title: 'Title',
      error: true,
    },
  },
  {
    label: 'Bare',
    props: {
      title: 'Title',
      bare: true,
    },
  },
  {
    label: 'Without title',
  },
]

const Grid = withGrid<AlertPanelProps>({
  lines: GRID_LINES,
  items: GRID_ITEMS,
  itemHorizontalSpace: 24,
  itemVerticalSpace: 24,
  itemWrapper: Container,
})(AlertPanel)

export default {
  title: 'Alerts/AlertPanel',
  component: AlertPanel,
}

export const basic = (props: AlertPanelProps) => (
  <Container>
    <AlertPanel icon={<Icon icon="information-round" />} {...props}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias commodi
      consequatur cumque debitis, dicta doloremque doloribus eveniet facere
      impedit labore nam nisi nulla quis quod repellendus reprehenderit rerum
      similique voluptas!
    </AlertPanel>
  </Container>
)

basic.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/oTNjqlhFKMjVds2cyD3OpS/%F0%9F%A7%A9----Alert-Panel?node-id=102%3A773',
  },
}

export const gallery = () => <Grid />
