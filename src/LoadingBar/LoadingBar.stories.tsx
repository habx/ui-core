import * as React from 'react'
import styled from 'styled-components'

import withGrid from '../_storybook/withGrid'

import LoadingBar, { LoadingBarProps } from './index'

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const GRID_PROPS = {}

const GRID_LINES = [
  {
    title: 'Regular',
    props: { total: 100, loaded: 50 },
  },
]

const GRID_ITEMS = [
  {
    label: 'Empty',
    props: { total: 100, loaded: 0 },
  },
  {
    label: 'Half',
    props: { total: 100, loaded: 50 },
  },
  {
    label: 'Full',
    props: { total: 100, loaded: 100 },
  },
]

const Grid = withGrid<LoadingBarProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
  itemWrapper: LoaderContainer,
  itemHorizontalSpace: 24,
})(LoadingBar)

export default {
  title: 'Layouts/LoadingBar',
  component: LoadingBar,
}

export const gallery = () => <Grid />

export const lightBackground = () => <Grid background="light" />

export const darkBackground = () => <Grid background="dark" />
