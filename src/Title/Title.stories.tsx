import { withKnobs, select, boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import styled from 'styled-components'

import breakpoints from '../breakpoints'

import Title from './index'
import { TitleTypes } from './Title.interface'

const TitleContainer = styled.div`
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
  'Header Maxi Title': 'headerMaxi',
  'Header Big Title': 'headerBig',
  'Header Title': 'header',
  'Header Small Title': 'headerSmall',
  'Article Title': 'article',
  'Section Title': 'section',
  'Regular Title': 'regular',
}

storiesOf('Typography|Title', module)
  .addDecorator(withKnobs)
  .add('galery', () => (
    <TitleContainer>
      <Title type="headerMaxi">Big bad and boujee</Title>
      <Title type="headerBig">
        Raindrops, drop tops, smokin’ on cookie in the
      </Title>
      <Title type="header">
        Devenez propriétaire d’un appartement neuf en plein centre d’Antony
      </Title>
      <Title type="headerSmall">
        La nouvelle façon d’acheter  un appartement neuf
      </Title>
      <Title type="article">Everything You Need for Successful Holiday</Title>
      <Title type="section">
        Une démarche simple et rapide, une démarche rapide et simple
      </Title>
      <Title type="regular">Les murs porteurs et leur représentation</Title>
    </TitleContainer>
  ))
  .add('dynamic', () => (
    <Title
      type={select('Type', types, 'headerBig')}
      primary={boolean('Color override : Primary', false)}
      secondary={boolean('Color override : Secondary', false)}
      warning={boolean('Color override : Warning', false)}
    >
      Big bad  and boujee
    </Title>
  ))
