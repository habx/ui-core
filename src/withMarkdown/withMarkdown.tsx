import * as React from 'react'
import styled from 'styled-components'

import { isFunction } from '../_internal/data'
import { linkStyle } from '../Link/Link.style'
import { titleStyles } from '../Title/Title.style'

import {
  WithMarkdownConfig,
  WithMarkdownReceivedProps,
} from './withMarkdown.interface'

const Markdown = React.lazy(() => import('./Markdown'))

export const withMarkdown =
  <RefElement extends HTMLElement, ExtraProps extends {} = {}>({
    inline = false,
  }: WithMarkdownConfig = {}) =>
  <Props extends object>(
    WrappedComponent: React.ComponentType<React.PropsWithChildren<Props>>
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
        ${titleStyles.headerSmall};
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
          content: '•';
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

      if (!markdown) {
        return (
          <WrappedComponent ref={ref} {...(rest as Props)}>
            {children}
          </WrappedComponent>
        )
      }

      const isInline = isFunction(inline) ? inline(props) : !!inline

      return (
        <React.Suspense>
          <Markdown
            ref={ref}
            Component={StyledComponent}
            {...(rest as Props)}
            data-markdown
            isInline={isInline}
          >
            {children as string}
          </Markdown>
        </React.Suspense>
      )
    })

    return Component
  }
