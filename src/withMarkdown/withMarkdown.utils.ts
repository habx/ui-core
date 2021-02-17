import MarkdownIt from 'markdown-it'

import { isNil } from '../_internal/data'

const md = new MarkdownIt({
  html: false,
  xhtmlOut: false,
  breaks: true,
  langPrefix: 'language-',
  linkify: true,
  typographer: true,
  quotes: '“”‘’',
  highlight: () => '',
})

const defaultRender =
  md.renderer.rules.link_open ||
  function (tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options)
  }

md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
  const hrefAttrIndex = tokens[idx].attrIndex('href')
  const href = hrefAttrIndex < 0 ? '' : tokens[idx].attrs?.[hrefAttrIndex][1]

  if (href && !href.startsWith('#')) {
    const targetAttrIndex = tokens[idx].attrIndex('target')
    if (targetAttrIndex < 0) {
      tokens[idx].attrPush(['target', '_blank'])
    } else {
      // @ts-ignore
      tokens[idx].attrs[targetAttrIndex][1] = '_blank'
    }
  }

  return defaultRender(tokens, idx, options, env, self)
}

const cleanValue = (value: string | null): string => {
  if (isNil(value)) {
    return ''
  }

  return value
}

export const getHTMLFromMarkdown = ({
  inline,
  children,
}: {
  inline: boolean
  children: string
}) => {
  const value = cleanValue(children)

  if (inline) {
    return md.renderInline(value)
  } else {
    return md.render(value)
  }
}
