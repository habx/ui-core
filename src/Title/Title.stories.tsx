import {
  withKnobs,
  select,
  boolean,
  text,
  number,
} from '@storybook/addon-knobs'
import * as React from 'react'
import styled from 'styled-components'

import withGrid from '../_internal/StorybookGrid'
import breakpoints from '../breakpoints'

import Title from './Title'
import TitleProps, { TitleTypes } from './Title.interface'

const TitleContainer = styled.div`
  width: 750px;
  @media (${breakpoints.below.phone}) {
    max-width: calc(100vw - 48px);
  }
`

const types: { [key: string]: TitleTypes } = {
  'Header Maxi Title': 'headerMaxi',
  'Header Big Title': 'headerBig',
  'Header Title': 'header',
  'Header Small Title': 'headerSmall',
  'Article Title': 'article',
  'Section Title': 'section',
  'Regular Title': 'regular',
}

const WrappedTitle: React.FunctionComponent<TitleProps> = (props) => (
  <TitleContainer>
    <Title {...props} />
  </TitleContainer>
)

const GRID_PROPS = {
  children:
    'Devenez propriétaire d’un appartement neuf en plein centre d’Antony',
}

const GRID_LINES = [
  ...Object.entries(types).map(([typeName, type]) => ({
    title: typeName,
    props: {
      type: type,
    },
  })),
]

const GRID_ITEMS = [{}]

const Grid = withGrid<TitleProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
})(WrappedTitle)

export default {
  title: 'Typography/Title',
  decorators: [withKnobs],
}

export const gallery = () => <Grid />

export const lightBackground = () => <Grid background="light" />

export const darkBackground = () => <Grid background="dark" />

export const dynamic = () => (
  <TitleContainer>
    <Title
      type={select('Type', types, 'headerBig')}
      children={text(
        'Title content',
        'Devenez propriétaire d’un appartement neuf en plein centre d’Antony'
      )}
      primary={boolean('Color override : Primary', false)}
      secondary={boolean('Color override : Secondary', false)}
      warning={boolean('Color override : Warning', false)}
      markdown={boolean('Markdown support', false)}
      opacity={number('Opacity', 1, {
        range: true,
        min: 0,
        max: 1,
        step: 0.01,
      })}
    />
  </TitleContainer>
)

gallery.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/f5tJXjQSoOhy7K3r99pv21Fd/Brand-assets-%26-colors?node-id=8%3A2',
    },
  },
}
