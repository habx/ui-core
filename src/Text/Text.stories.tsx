import { withKnobs, select, boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { config } from 'storybook-addon-designs'
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
  'Very Large Text': 'veryLarge',
  'Large Text': 'large',
  'Emphasis text': 'emphasis',
  'Regular Text': 'regular',
  'Caption Text': 'caption',
  'Caption Small Text': 'captionSmall',
}

const GRID_PROPS = {
  children:
    "Les volumes et la forme des pièces sont représentés à titre indicatif. Ils ne constituent pas le plan definitif de votre futur appartement mais bien une suggestion d'agencement. C'est notre architecte qui finalisera ce plan pour vous.",
}

const GRID_LINES = [
  ...Object.entries(types).map(([typeName, type]) => ({
    title: typeName,
    props: { type },
  })),
  {
    title: 'Colored background',
    coloredBackground: true,
    props: {
      opacity: 1,
    },
  },
]

const GRID_ITEMS = [{}]

const WrappedText: React.FunctionComponent<TextProps> = props => (
  <TextContainer>
    <Text {...props} />
  </TextContainer>
)

const Grid = withGrid<TextProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
})(WrappedText)

storiesOf('Typography|Text', module)
  .addDecorator(withKnobs)
  .add('galery', () => <Grid />, {
    design: config({
      type: 'figma',
      url:
        'https://www.figma.com/file/f5tJXjQSoOhy7K3r99pv21Fd/Brand-assets-%26-colors?node-id=8%3A2',
    }),
  })
  .add('dynamic', () => (
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
      />
    </TextContainer>
  ))
