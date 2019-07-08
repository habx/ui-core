import MarkdownIt from 'markdown-it'
import markdownItSupPlugin from 'markdown-it-sup'

import { isNil } from '../_internal/data'

import { logo, coloredText } from './custom-rules'

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

md.use(markdownItSupPlugin).use(logo)
md.use(markdownItSupPlugin).use(coloredText)

const defaultRender =
  md.renderer.rules.link_open ||
  function(tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options)
  }

md.renderer.rules.link_open = function(tokens, idx, options, env, self) {
  const aIndex = tokens[idx].attrIndex('target')

  if (aIndex < 0) {
    tokens[idx].attrPush(['target', '_blank'])
  } else {
    tokens[idx].attrs[aIndex][1] = '_blank'
  }
  return defaultRender(tokens, idx, options, env, self)
}

const cleanValue = value => {
  if (isNil(value)) {
    return ''
  }

  return value
}

export const parseInline = (value, env) =>
  md.renderInline(cleanValue(value), env)

export const parseFull = (value, env) => md.render(cleanValue(value), env)
