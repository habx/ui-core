import MarkdownIt from 'markdown-it'
import markdownItSupPlugin from 'markdown-it-sup'

import { isNil } from '../_internal/data'
import { DesignSystemTheme } from '../theme'

import { logoRule, coloredTextRule } from './custom-rules'

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

md.use(markdownItSupPlugin).use(logoRule)
md.use(markdownItSupPlugin).use(coloredTextRule)

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

export const parseInline = (
  value: string | null,
  env: { theme: DesignSystemTheme }
) => md.renderInline(cleanValue(value), env)

export const parseFull = (
  value: string | null,
  env: { theme: DesignSystemTheme }
) => md.render(cleanValue(value), env)
