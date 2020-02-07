import { withKnobs, boolean, select } from '@storybook/addon-knobs'
import * as React from 'react'
import styled from 'styled-components'

import withGrid from '../_internal/StorybookGrid'

import Loader from './index'
import LoaderProps from './Loader.interface'

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
  decorators: [withKnobs],
}

export const gallery = () => <Grid />

export const lightBackground = () => <Grid background="light" />

export const darkBackground = () => <Grid background="dark" />

export const dynamic = () => (
  <LoaderContainer>
    <Loader
      size={select<'large' | 'medium' | 'small'>(
        'Size',
        ['large', 'medium', 'small'],
        'medium'
      )}
      outline={boolean('Outlined', false)}
      colored={boolean('Color', true)}
    />
  </LoaderContainer>
)

gallery.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=18%3A1845',
    },
  },
}
