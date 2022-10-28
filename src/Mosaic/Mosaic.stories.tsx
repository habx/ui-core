import React from 'react'
import styled from 'styled-components'

import { withGrid } from '../_storybook/withGrid'

import { Background, palette } from '..'

import { Mosaic, MosaicProps } from '.'

const Container = styled.div`
  > * {
    height: 142px;
  }
`

const GridContainer = styled.div`
  min-width: 800px;
  margin: 0;
  padding: 0;
  > * {
    height: 142px;
  }
`

const array = new Array(10).fill(null).map((a, i) => (
  <Background
    key={`ìtem-container-${i + 1}`}
    backgroundColor={palette.neutralBlackWithIntensityFading[300]}
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    {i + 1}
  </Background>
))

const GRID_LINES = [
  {
    title: '1 item',
    props: {
      children: array.slice(0, 1),
    },
  },
  {
    title: '2 items',
    props: {
      children: array.slice(0, 2),
    },
  },
  {
    title: '3 items',
    props: {
      children: array.slice(0, 3),
    },
  },
  {
    title: '4 items',
    props: {
      children: array.slice(0, 4),
    },
  },
  {
    title: '5 items',
    props: {
      children: array.slice(0, 5),
    },
  },
  {
    title: '6 items',
    props: {
      children: array.slice(0, 6),
    },
  },
  {
    title: '7 items',
    props: {
      children: array.slice(0, 7),
    },
  },
  {
    title: '8 items',
    props: {
      children: array.slice(0, 8),
    },
  },
  {
    title: '9 items',
    props: {
      children: array.slice(0, 9),
    },
  },
  {
    title: '10 items',
    props: {
      children: array,
    },
  },
  {
    title: 'Spaced',
    props: {
      children: array,
      spacing: true,
    },
  },
  {
    title: 'Rounded',
    props: {
      children: array,
      rounded: true,
    },
  },
  {
    title: 'Spaced + Rounded',
    props: {
      spacing: true,
      children: array,
      rounded: true,
    },
  },
]

const GRID_ITEMS = [{}]

const GRID_PROPS = {
  children: array,
}

const Grid = withGrid<MosaicProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
  itemWrapper: GridContainer,
})(Mosaic)

export default {
  title: 'Layouts/Mosaic',
  component: Mosaic,
}

export const basic = (props: MosaicProps) => {
  return (
    <Container>
      <Mosaic {...props}>{array}</Mosaic>
    </Container>
  )
}

basic.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/tUTMJmyHQQxfpveZ3dTEgU/Configurator-of-prestations?node-id=2437%3A57587',
  },
}

export const gallery = () => <Grid />
