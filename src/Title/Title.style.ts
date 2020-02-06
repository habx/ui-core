import styled, { css } from 'styled-components'

import breakpoints from '../breakpoints'
import fontScale, { FontScale } from '../fontScale'
import theme from '../theme'

const size = (name: keyof FontScale) => css`
  font-size: ${fontScale[name].size}px;
  line-height: ${fontScale[name].lineHeight}px;
`

const baseTitleStyle = css<{ color?: string }>`
  color: ${theme.textColor({ dynamic: true, propName: 'color' })};
  font-family: ${theme.font('title')};
  font-weight: 400;
  margin: 0;
`

const headerMaxiTitleStyle = css`
  ${baseTitleStyle};

  ${size('superNova')};

  @media (${breakpoints.below.smallTablet}) {
    ${size('nova')};
  }

  @media (${breakpoints.below.phone}) {
    ${size('sun')};
  }
`

const headerBigTitleStyle = css`
  ${baseTitleStyle};

  ${size('nova')};

  @media (${breakpoints.below.smallTablet}) {
    ${size('sun')};
  }

  @media (${breakpoints.below.phone}) {
    ${size('jupiter')};
  }
`

const headerTitleStyle = css`
  ${baseTitleStyle};

  ${size('sun')};

  @media (${breakpoints.below.smallTablet}) {
    ${size('jupiter')};
  }
`

const headerSmallTitleStyle = css`
  ${baseTitleStyle};

  ${size('jupiter')};

  @media (${breakpoints.below.smallTablet}) {
    ${size('earth')};
  }
`

const articleTitleStyle = css`
  ${baseTitleStyle};

  ${size('jupiter')};

  @media (${breakpoints.below.smallTablet}) {
    ${size('earth')};
  }
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

export const HeaderMaxiTitleComponent = styled.h1`
  ${headerMaxiTitleStyle};
`

export const HeaderBigTitleComponent = styled.h1`
  ${headerBigTitleStyle};
`

export const HeaderTitleComponent = styled.h1`
  ${headerTitleStyle};
`

export const HeaderSmallTitleComponent = styled.h1`
  ${headerSmallTitleStyle};
`

export const ArticleTitleComponent = styled.h2`
  ${articleTitleStyle};
`

export const SectionTitleComponent = styled.h3`
  ${sectionTitleStyle};
`

export const RegularTitleComponent = styled.h4`
  ${regularTitleStyle};
`
