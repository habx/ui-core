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

import Text from './Text'
import { TextTypes } from './Text.interface'
import TextProps from './Text.interface'

const TextContainer = styled.div`
  width: 750px;

  @media (${breakpoints.below.phone}) {
    max-width: calc(100vw - 48px);
  }
`

const types: { [key: string]: TextTypes } = {
  'Regular Text': 'regular',
  'Very Large Text': 'veryLarge',
  'Large Text': 'large',
  'Emphasis text': 'emphasis',
  'Caption Text': 'caption',
  'Caption Small Text': 'captionSmall',
}

const GRID_LINES = [
  ...Object.entries(types).map(([typeName, type]) => ({
    title: typeName,
    props: { type },
  })),
]

const BASIC_CHILDREN =
  "Les volumes et la forme des pièces sont représentés à titre indicatif. Ils ne constituent pas le plan definitif de votre futur appartement mais bien une suggestion d'agencement. C'est notre architecte qui finalisera ce plan pour vous."

const GRID_ITEMS = [
  {
    label: 'Withou markdown',
    props: {
      children: BASIC_CHILDREN,
    },
  },
  {
    label: 'With markdown',
    props: {
      children: `**Bold text**\n*Italic text*\n[Link](https://wwww.habx.com)\n- element 1\n- element 2\n- element 3\n- ${BASIC_CHILDREN}`,
      markdown: true,
    },
  },
]

const WrappedText: React.FunctionComponent<TextProps> = props => (
  <TextContainer>
    <Text {...props} />
  </TextContainer>
)

const Grid = withGrid<TextProps>({
  lines: GRID_LINES,
  items: GRID_ITEMS,
  itemHorizontalSpace: 36,
})(WrappedText)

export default {
  title: 'Typography/Text',
  decorators: [withKnobs],
}

export const gallery = () => <Grid />

export const lightBackground = () => <Grid background="light" />

export const darkBackground = () => <Grid background="dark" />

export const dynamic = () => (
  <TextContainer>
    <Text
      type={select('Type', types, 'regular')}
      children={text(
        'Text content',
        'Devenez propriétaire d’un appartement neuf en plein centre d’Antony'
      )}
      primary={boolean('Color override : Primary', false)}
      secondary={boolean('Color override : Secondary', false)}
      warning={boolean('Color override : Warning', false)}
      markdown={boolean('Markdown support', false)}
      opacity={number('Opacity', 0.72, {
        range: true,
        min: 0,
        max: 1,
        step: 0.01,
      })}
    />
  </TextContainer>
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
