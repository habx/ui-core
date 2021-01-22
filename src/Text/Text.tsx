import * as React from 'react'
import styled, {
  css,
  FlattenInterpolation,
  StyledComponent,
} from 'styled-components'

import { mapValues } from '../_internal/data'
import { breakpoints } from '../breakpoints'
import { fontScale, FontScale } from '../fontScale'
import { theme, TypographyColors } from '../theme'
import { withMarkdown } from '../withMarkdown'

import { TextProps, TextTypes } from './Text.interface'

const size = (name: keyof FontScale) => css`
  font-size: ${fontScale[name].size}px;
  line-height: ${fontScale[name].lineHeight}px;
`

const baseTextStyle = css<{
  color?: string
  variation?: keyof TypographyColors
}>`
  color: ${theme.textColor({
    valuePropName: 'color',
    variationPropName: 'variation',
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
  letter-spacing: 0.02px;
  font-weight: 300;

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

const emphasisTextStyle = css<{
  color?: string
  variation?: keyof TypographyColors
}>`
  ${baseTextStyle};

  ${size('mars')};
  font-weight: 500;

  color: ${theme.textColor({
    valuePropName: 'color',
    variationPropName: 'variation',
    variation: 'title',
  })};
`

const regularTextStyle = css`
  ${baseTextStyle};

  ${size('moon')};
`

const smallTextStyle = css`
  ${baseTextStyle};

  ${size('pluto')};
`

const captionTextStyle = css`
  ${baseTextStyle};

  ${size('asteroid')};
`

const captionSmallTextStyle = css`
  ${baseTextStyle};

  ${size('dust')};
`

export const textStyles: Record<TextTypes, FlattenInterpolation<any>> = {
  veryLarge: veryLargeTextStyle,
  large: largeTextStyle,
  emphasis: emphasisTextStyle,
  regular: regularTextStyle,
  small: smallTextStyle,
  caption: captionTextStyle,
  captionSmall: captionSmallTextStyle,
}

export const RawTextComponents = mapValues(
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
