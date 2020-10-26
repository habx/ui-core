import * as React from 'react'
import styled from 'styled-components'

import withGrid from '../_storybook/withGrid'
import Text from '../Text'

import { LoaderDotsProps, LoaderDots } from './index'

const LoaderContainer = styled(Text)`
  display: flex;
  flex-direction: column;
  position: relative;
`

const GRID_PROPS = {}

const GRID_LINES = [
  {
    title: 'Regular',
  },
]

const GRID_ITEMS = [
  {
    label: 'Regular',
    props: {},
  },
  {
    label: 'Small',
    props: { small: true },
  },
  {
    label: 'Large',
    props: { large: true },
  },
]

const Grid = withGrid<LoaderDotsProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
  itemWrapper: LoaderContainer,
  itemHorizontalSpace: 24,
})(LoaderDots)

export default {
  title: 'Layouts/LoaderDots',
  component: LoaderDots,
}

export const basic = (props: LoaderDotsProps) => (
  <LoaderContainer>
    <LoaderDots {...props} />
  </LoaderContainer>
)

export const gallery = () => <Grid />

export const lightBackground = () => <Grid background="light" />

export const darkBackground = () => <Grid background="dark" />
