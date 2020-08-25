import * as React from 'react'
import styled, { css, StyledComponent } from 'styled-components'

import { mapValues } from '../_internal/data'
import breakpoints from '../breakpoints'
import fontScale, { FontScale } from '../fontScale'
import theme from '../theme'
import withMarkdown from '../withMarkdown'

import TextProps, { TextTypes } from './Text.interface'

const size = (name: keyof FontScale) => css`
  font-size: ${fontScale[name].size}px;
  line-height: ${fontScale[name].lineHeight}px;
`

const baseTextStyle = css<{ color?: string }>`
  color: ${theme.textColor({
    opacity: 0.72,
    dynamic: true,
    propName: 'color',
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

export const veryLargeTextStyle = css`
  ${baseTextStyle};

  ${size('nova')};

  @media (${breakpoints.below.smallTablet}) {
    ${size('sun')};
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
  font-weight: 500;

  color: ${theme.textColor({ dynamic: true, propName: 'color' })};
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
  veryLarge: veryLargeTextStyle,
  large: largeTextStyle,
  emphasis: emphasisTextStyle,
  regular: regularTextStyle,
  caption: captionTextStyle,
  captionSmall: captionSmallTextStyle,
}

const RawTextComponents = mapValues(
  textStyles,
  (style) =>
    styled.div`
      ${style}
    `
) as Record<TextTypes, StyledComponent<'div', any, TextProps>>

const InnerText = React.forwardRef<HTMLElement, TextProps>(
  ({ inline, type = 'regular', ...props }, ref) => {
    const Component = RawTextComponents[type]

    return (
      <Component
        ref={ref}
        as={inline === true ? 'span' : undefined}
        {...props}
      />
    )
  }
)

export const Text = withMarkdown<HTMLDivElement, { inline?: boolean }>({
  inline: (props) =>
    props.inline || ['caption', 'captionSmall'].includes(props.type),
})<TextProps>(InnerText)
