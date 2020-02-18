import * as React from 'react'
import styled from 'styled-components'

import { isFunction } from '../_internal/data'
import { linkStyle } from '../Link/Link.style'
import DesignSystemTheme from '../theme/theme.interface'
import { titleStyles } from '../Title/Title.style'
import useTheme from '../useTheme'

import {
  WithMarkdownConfig,
  WithMarkdownReceivedProps,
} from './withMarkdown.interface'
import { parseFull, parseInline } from './withMarkdown.utils'

const parse = ({
  inline,
  theme,
  children,
}: {
  inline: boolean
  theme: DesignSystemTheme
  children: string
}) => {
  const env = {
    theme,
  }

  const mdParse = inline ? parseInline : parseFull

  return mdParse(children || '', env)
}

const withMarkdown = <
  RefElement extends HTMLElement,
  ExtraProps extends {} = {}
>({ inline = false }: WithMarkdownConfig = {}) => <Props extends object>(
  WrappedComponent: React.ComponentType<Props>
) => {
  const StyledComponent = styled(WrappedComponent)`
    & p {
      &:not(:first-child) {
        margin-top: 12px;
      }

      &:not(:last-child) {
        margin-bottom: 12px;
      }
    }

    & h2 {
      ${titleStyles.article};
    }

    & h3 {
      ${titleStyles.section};

      &:not(:first-child) {
        margin-top: 48px;
      }
    }

    & h4 {
      ${titleStyles.regular};

      &:not(:first-child) {
        margin-top: 24px;
      }
    }

    & strong {
      font-weight: 600;
    }

    & a {
      ${linkStyle};
    }

    & ul {
      list-style-type: none;
      padding-inline-start: 0;
    }

    & li {
      position: relative;
      display: block;
      padding-left: 0.8em;

      &:first-letter {
        text-transform: capitalize;
      }

      &::after {
        content: '·';
        position: absolute;
        left: 0;
        top: 0;
      }
    }
  ` as React.ForwardRefExoticComponent<Props>

  const Component = React.forwardRef<
    RefElement,
    Props & WithMarkdownReceivedProps & ExtraProps
  >((props, ref) => {
    const { markdown, children, ...rest } = props
    const theme = useTheme()

    if (!markdown) {
      return (
        <WrappedComponent {...(rest as Props)}>{children}</WrappedComponent>
      )
    }

    const isInline = isFunction(inline) ? inline(props) : !!inline

    return (
      <StyledComponent
        ref={ref}
        {...(rest as Props)}
        data-markdown
        dangerouslySetInnerHTML={{
          __html: parse({
            children: children as string,
            inline: isInline,
            theme,
          }),
        }}
      />
    )
  })

  return Component
}

export default withMarkdown
