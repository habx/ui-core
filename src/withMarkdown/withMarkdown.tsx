import * as React from 'react'

import { isFunction } from '../_internal/data'
import useTheme from '../useTheme'

import {
  WithMarkdownConfig,
  WithMarkdownReceivedProps,
} from './withMarkdown.interface'
import { parseFull, parseInline } from './withMarkdown.utils'

const parse = ({ inline, theme, children }) => {
  const env = {
    theme,
  }

  const mdParse = inline ? parseInline : parseFull

  return mdParse(children || '', env)
}

const withMarkdown = ({ inline = false }: WithMarkdownConfig = {}) => <
  Props extends object
>(
  WrappedComponent: React.ComponentType<Props>
) => {
  const Component: React.FunctionComponent<
    Props & WithMarkdownReceivedProps
  > = props => {
    const { markdown, children, ...rest } = props
    const theme = useTheme()

    if (!markdown) {
      return (
        <WrappedComponent {...(rest as Props)}>{children}</WrappedComponent>
      )
    }

    const isInline = isFunction(inline) ? inline(props) : !!inline

    return (
      <WrappedComponent
        {...(rest as Props)}
        data-markdown
        dangerouslySetInnerHTML={{
          __html: parse({ children, inline: isInline, theme }),
        }}
      />
    )
  }

  return Component
}

export default withMarkdown
