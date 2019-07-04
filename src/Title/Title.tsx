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

const baseTitleStyle = css`
  color: ${theme.color('secondary', { dynamic: true, propName: 'color' })};
  font-family: ${theme.font('title')};
  font-weight: 400;
  margin: 0;
`

const headerMaxiTitleStyle = css`
  ${baseTitleStyle};

  ${size('milkyWay')};

  @media (${breakpoints.below.smallTablet}) {
    ${size('nova')};
  }
`

const headerBigTitleStyle = css`
  ${baseTitleStyle};

  ${size('superNova')};

  @media (${breakpoints.below.smallTablet}) {
    ${size('nova')};
  }
`

const headerTitleStyle = css`
  ${baseTitleStyle};

  ${size('nova')};

  @media (${breakpoints.below.smallTablet}) {
    ${size('sun')};
  }
`

const headerSmallTitleStyle = css`
  ${baseTitleStyle};

  ${size('sun')};

  @media (${breakpoints.below.smallTablet}) {
    ${size('jupiter')};
  }
`

const articleTitleStyle = css`
  ${baseTitleStyle};

  ${size('jupiter')};
`

const sectionTitleStyle = css`
  ${baseTitleStyle};

  ${size('earth')};
`

const regularTitleStyle = css`
  ${baseTitleStyle};

  font-weight: 500;

  ${size('mars')};
`

export const titleStyles = {
  headerMaxi: headerMaxiTitleStyle,
  headerBig: headerBigTitleStyle,
  header: headerTitleStyle,
  headerSmall: headerSmallTitleStyle,
  article: articleTitleStyle,
  section: sectionTitleStyle,
  regular: regularTitleStyle,
}

const HeaderMaxiTitleComponent = styled.h1`
  ${headerMaxiTitleStyle};
`

const HeaderBigTitleComponent = styled.h1`
  ${headerBigTitleStyle};
`

const HeaderTitleComponent = styled.h1`
  ${headerTitleStyle};
`

const HeaderSmallTitleComponent = styled.h1`
  ${headerSmallTitleStyle};
`

const ArticleTitleComponent = styled.h2`
  ${articleTitleStyle};
`

const SectionTitleComponent = styled.h3`
  ${sectionTitleStyle};
`

const RegularTitleComponent = styled.h4`
  ${regularTitleStyle};
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
