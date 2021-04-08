import * as React from 'react'
import styled from 'styled-components'

import { withGrid } from '../_storybook/withGrid'

import { Loader, LoaderProps } from './index'

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const GRID_PROPS = {}

const GRID_LINES = [
  {
    title: 'Regular',
  },
  {
    title: 'Outlined',
    props: { outline: true },
  },
  {
    title: 'Grey',
    props: { colored: false },
  },
]

const GRID_ITEMS = [
  {
    label: 'Small',
    props: { size: 'small' as 'small' },
  },
  {
    label: 'Medium',
    props: { size: 'medium' as 'medium' },
  },
  {
    label: 'Large',
    props: { size: 'large' as 'large' },
  },
]

const Grid = withGrid<LoaderProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
  itemWrapper: LoaderContainer,
  itemHorizontalSpace: 24,
})(Loader)

export default {
  title: 'Layouts/Loader',
  component: Loader,
}

export const basic = (props: LoaderProps) => (
  <LoaderContainer>
    <Loader {...props} />
  </LoaderContainer>
)

basic.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=18%3A1845',
  },
}

export const gallery = () => <Grid />
