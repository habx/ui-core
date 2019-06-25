import { storiesOf } from '@storybook/react'
import * as React from 'react'

import Title from './index'

import styled from 'styled-components'

const TitleContainer = styled.div`
  max-width: 750px;
  
  > * {
    margin-bottom: 24px;
  }
`

storiesOf('Typography|Title', module)
  .add('full example', () => (
    <TitleContainer>
      <Title type="display">Big bad  and boujee</Title>
      <Title type="hero1">Devenez propriétaire d’un appartement neuf en plein centre d’Antony</Title>
      <Title type="hero2">La nouvelle façon d’acheter un appartement neuf</Title>
      <Title type="sectionTitle">Everything You Need for Successful Holiday</Title>
      <Title type="columnTitle">Une démarche simple et rapide, une démarche rapide et simple</Title>
      <Title type="title">Les murs porteurs et leur représentation</Title>
    </TitleContainer>
  ))
