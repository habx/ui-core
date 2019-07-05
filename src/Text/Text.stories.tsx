import { withKnobs, select, boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import styled from 'styled-components'

import breakpoints from '../breakpoints'

import Text from './index'
import { TitleTypes } from './Text.interface'

const TextContainer = styled.div`
  width: 750px;
  margin: 64px;

  & > * {
    margin-bottom: 1em;
  }

  @media (${breakpoints.below.phone}) {
    margin: 24px;
    max-width: calc(100vw - 48px);
  }
`

const types: { [key: string]: TitleTypes } = {
  'Regular Text': 'regular',
  'Caption Text': 'caption',
  'Caption Small Text': 'captionSmall',
}

storiesOf('Typography|Text', module)
  .addDecorator(withKnobs)
  .add('galery', () => (
    <TextContainer>
      <Text type="regular">
        Les volumes et la forme des pièces sont représentés à titre indicatif.
        Ils ne constituent pas le plan definitif de votre futur appartement mais
        bien une suggestion d'agencement. C'est notre architecte qui finalisera
        ce plan pour vous.
      </Text>
      <Text type="caption">
        Les volumes et la forme des pièces sont représentés à titre indicatif.
        Ils ne constituent pas le plan definitif de votre futur appartement mais
        bien une suggestion d'agencement. C'est notre architecte qui finalisera
        ce plan pour vous.
      </Text>
      <Text type="captionSmall">
        Les volumes et la forme des pièces sont représentés à titre indicatif.
        Ils ne constituent pas le plan definitif de votre futur appartement mais
        bien une suggestion d'agencement. C'est notre architecte qui finalisera
        ce plan pour vous.
      </Text>
    </TextContainer>
  ))
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
