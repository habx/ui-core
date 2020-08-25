import * as React from 'react'
import styled from 'styled-components'

import withGrid from '../_internal/StorybookGrid'
import breakpoints from '../breakpoints'

import Title, { TitleProps, TitleTypes } from './index'

const TITLE_CONTENT =
  'Devenez propriétaire d’un appartement neuf en plein centre d’Antony'

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
  children: TITLE_CONTENT,
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
  component: Title,
}

export const basic = (props: TitleProps) => (
  <Title {...props}>{TITLE_CONTENT}</Title>
)

basic.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/f5tJXjQSoOhy7K3r99pv21Fd/Brand-assets-%26-colors?node-id=8%3A2',
    },
  },
}

export const gallery = () => <Grid />

export const lightBackground = () => <Grid background="light" />

export const darkBackground = () => <Grid background="dark" />
