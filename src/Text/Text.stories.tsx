import * as React from 'react'
import styled from 'styled-components'

import withGrid from '../_storybook/withGrid'
import breakpoints from '../breakpoints'

import Text, { TextProps, TextTypes } from './index'

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

const WrappedText: React.FunctionComponent<TextProps> = (props) => (
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
  component: Text,
}

export const basic = (props: TextProps) => (
  <Text {...props}>{BASIC_CHILDREN}</Text>
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
