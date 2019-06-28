import { withKnobs, select, boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import styled from 'styled-components'

import Title from './index'
import { TitleTypes } from './Title.interface'

const TitleContainer = styled.div`
  max-width: 750px;
  margin: 64px;

  & > * {
    margin-bottom: 24px;
  }
`

const types: { [key: string]: TitleTypes } = {
  Display: 'display',
  'Hero 1': 'hero1',
  'Hero 2': 'hero2',
  'Section Title': 'sectionTitle',
  'Column Title': 'columnTitle',
  Title: 'title',
}

storiesOf('Typography|Title', module)
  .addDecorator(withKnobs)
  .add('galery', () => (
    <TitleContainer>
      <Title type="display">Big bad  and boujee</Title>
      <Title type="hero1">
        Devenez propriétaire d’un appartement neuf en plein centre d’Antony
      </Title>
      <Title type="hero2">
        La nouvelle façon d’acheter un appartement neuf
      </Title>
      <Title type="sectionTitle">
        Everything You Need for Successful Holiday
      </Title>
      <Title type="columnTitle">
        Une démarche simple et rapide, une démarche rapide et simple
      </Title>
      <Title type="title">Les murs porteurs et leur représentation</Title>
    </TitleContainer>
  ))
  .add('dynamic', () => (
    <Title
      type={select('Type', types, 'display')}
      primary={boolean('Color override : Primary', false)}
      secondary={boolean('Color override : Secondary', false)}
      warning={boolean('Color override : Warning', false)}
    >
      Big bad  and boujee
    </Title>
  ))
