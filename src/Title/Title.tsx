import * as React from 'react'
import styled from 'styled-components'

import theme from '../theme'

import TitleProps from './Title.interface'

const BaseTitle = styled.h1`
  color: ${theme.get('textColor')};
  font-family: ${theme.get('titleFont')};
  font-weight: 400;
  margin: 0;
`

const DisplayComponent = styled(BaseTitle)`
  font-size: 96px;
  line-height: 96px;
`

const Hero1Component = styled(BaseTitle)`
  font-size: 52px;
  line-height: 60px;
`

const Hero2Component = styled(BaseTitle.withComponent('h2'))`
  font-size: 46px;
  line-height: 54px;
`

const SectionTitleComponent = styled(BaseTitle.withComponent('h3'))`
  font-size: 38px;
  line-height: 48px;
`

const ColumnTitleComponent = styled(BaseTitle.withComponent('h4'))`
  font-size: 24px;
  line-height: 36px;
`

const TitleComponent = styled(BaseTitle.withComponent('h5'))`
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
`

const components = {
  display: DisplayComponent,
  hero1: Hero1Component,
  hero2: Hero2Component,
  sectionTitle: SectionTitleComponent,
  columnTitle: ColumnTitleComponent,
  title: TitleComponent,
}

const Title: React.FunctionComponent<TitleProps> = ({ type, ...props }) => {
  const TitleComponent = components[type]

  return <TitleComponent {...props} />
}

export default Title
