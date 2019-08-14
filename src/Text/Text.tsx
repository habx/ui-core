import * as React from 'react'
import styled, { css } from 'styled-components'

import breakpoints from '../breakpoints'
import fontScale, { FontScale } from '../fontScale'
import theme from '../theme'
import withMarkdown from '../withMarkdown'

import TitleProps from './Text.interface'

const size = (name: keyof FontScale) => css`
  font-size: ${fontScale[name].size}px;
  line-height: ${fontScale[name].lineHeight}px;
`

const baseTextStyle = css<{ color?: string }>`
  color: ${theme.color('secondary', {
    dynamic: true,
    propName: 'color',
    opacity: 0.72,
  })};

  font-family: ${theme.font()};
  font-weight: 400;

  &[data-bold='true'] {
    font-weight: 600;
  }

  > p {
    margin: 0;
  }
`

const largeTextStyle = css`
  ${baseTextStyle};

  ${size('earth')};

  @media (${breakpoints.below.smallTablet}) {
    ${size('mars')};
  }
`

const emphasisTextStyle = css<{ color?: string }>`
  ${baseTextStyle};

  ${size('mars')};
  font-weight: 600;

  color: ${theme.color('secondary', {
    dynamic: true,
    propName: 'color',
  })};
`

const regularTextStyle = css`
  ${baseTextStyle};

  ${size('moon')};
`

const captionTextStyle = css`
  ${baseTextStyle};

  ${size('asteroid')};
`

const captionSmallTextStyle = css`
  ${baseTextStyle};

  ${size('dust')};
`

export const textStyles = {
  large: largeTextStyle,
  emphasis: emphasisTextStyle,
  regular: regularTextStyle,
  caption: captionTextStyle,
  captionSmall: captionSmallTextStyle,
}

const LargeTextComponent = styled.div`
  ${largeTextStyle};
`

const EmphasisTextComponent = styled.div`
  ${emphasisTextStyle};
`

const RegularTextComponent = styled.div`
  ${regularTextStyle};
`

const CaptionTextComponent = styled.div`
  ${captionTextStyle};
`

const CaptionSmallTextComponent = styled.div`
  ${captionSmallTextStyle};
`

const components = {
  large: LargeTextComponent,
  emphasis: EmphasisTextComponent,
  regular: RegularTextComponent,
  caption: CaptionTextComponent,
  captionSmall: CaptionSmallTextComponent,
}

const Text = React.forwardRef<HTMLDivElement, TitleProps>((props, ref) => {
  const { type = 'regular', ...rest } = props

  const TitleComponent = components[type] || RegularTextComponent

  return <TitleComponent ref={ref} {...rest} />
})

export default withMarkdown<{ inline?: boolean }>({ inline: true })(Text)
