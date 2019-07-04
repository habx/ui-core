import * as React from 'react'
import styled, { css } from 'styled-components'

import breakpoints from '../breakpoints'
import fontScale, { FontScale } from '../fontScale'
import theme from '../theme'
import withMarkdown from '../withMarkdown'

import TitleProps from './Title.interface'

const size = (name: keyof FontScale) => css`
  font-size: ${fontScale[name].size}px;
  line-height: ${fontScale[name].lineHeight}px;
`

const BaseTitle = styled.h1`
  color: ${theme.color('secondary', { dynamic: true, propName: 'color' })};
  font-family: ${theme.font('title')};
  font-weight: 400;
  margin: 0;
`

const HeaderMaxiTitleComponent = styled(BaseTitle)`
  ${size('milkyWay')};

  @media (${breakpoints.below.smallTablet}) {
    ${size('nova')};
  }
`

const HeaderBigTitleComponent = styled(BaseTitle)`
  ${size('superNova')};

  @media (${breakpoints.below.smallTablet}) {
    ${size('nova')};
  }
`

const HeaderTitleComponent = styled(BaseTitle)`
  ${size('nova')};

  @media (${breakpoints.below.smallTablet}) {
    ${size('sun')};
  }
`

const HeaderSmallTitleComponent = styled(BaseTitle)`
  ${size('sun')};

  @media (${breakpoints.below.smallTablet}) {
    ${size('jupiter')};
  }
`

const ArticleTitleComponent = styled(BaseTitle.withComponent('h2'))`
  ${size('jupiter')};
`

const SectionTitleComponent = styled(BaseTitle.withComponent('h3'))`
  ${size('earth')};
`

const RegularTitleComponent = styled(BaseTitle.withComponent('h4'))`
  font-weight: 500;

  ${size('mars')};
`

const components = {
  headerMaxi: HeaderMaxiTitleComponent,
  headerBig: HeaderBigTitleComponent,
  header: HeaderTitleComponent,
  headerSmall: HeaderSmallTitleComponent,
  article: ArticleTitleComponent,
  section: SectionTitleComponent,
  regular: RegularTitleComponent,
}

const Title: React.FunctionComponent<TitleProps> = ({ type, ...props }) => {
  const TitleComponent = components[type] || HeaderMaxiTitleComponent

  return <TitleComponent {...props} />
}

export default withMarkdown({ inline: true })(Title)
