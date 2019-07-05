import * as React from 'react'
import styled, { css } from 'styled-components'

import fontScale, { FontScale } from '../fontScale'
import theme from '../theme'
import withMarkdown from '../withMarkdown'

import TitleProps from './Text.interface'

const size = (name: keyof FontScale) => css`
  font-size: ${fontScale[name].size}px;
  line-height: ${fontScale[name].lineHeight}px;
`

const baseTextStyle = css`
  color: ${theme.color('secondary', {
    dynamic: true,
    propName: 'color',
    opacity: 0.72,
  })};
  font-family: ${theme.font('text')};
  font-weight: 400;

  &[data-bold='true'] {
    font-weight: 600;
  }

  > p {
    margin: 0;
  }
`

const emphasisTextStyle = css`
  ${baseTextStyle};

  font-weight: 600;
  font-size: 18px;

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
  emphasis: emphasisTextStyle,
  regular: regularTextStyle,
  caption: captionTextStyle,
  captionSmall: captionSmallTextStyle,
}

const EmphasisTextComponent = styled.span`
  ${emphasisTextStyle};
`

const RegularTextComponent = styled.span`
  ${regularTextStyle};
`

const CaptionTextComponent = styled.span`
  ${captionTextStyle};
`

const CaptionSmallTextComponent = styled.span`
  ${captionSmallTextStyle};
`

const components = {
  emphasis: EmphasisTextComponent,
  regular: RegularTextComponent,
  caption: CaptionTextComponent,
  captionSmall: CaptionSmallTextComponent,
}

const Text: React.FunctionComponent<TitleProps> = ({
  type = 'regular',
  ...props
}) => {
  const TitleComponent = components[type] || RegularTextComponent

  return <TitleComponent {...props} />
}

export default withMarkdown({ inline: true })(Text)
