import { configure, addDecorator, addParameters, StoryDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import centered from '@storybook/addon-centered'
import { create } from '@storybook/theming'

import theme from '../src/theme'

import providerDecorator from './providerDecorator'

const thunderTheme = process.env.STORYBOOK_THEME === 'dark' ? theme.dark : theme.light

addDecorator(withInfo)
addDecorator(centered as StoryDecorator)
addDecorator(providerDecorator(thunderTheme.name as 'light' | 'dark'))

addParameters({
  options: {
    sortStoriesByKind: true,
    theme: create({
      base: thunderTheme.name === 'dark' ? 'dark' : 'light',

      colorPrimary: thunderTheme.primary,
      colorSecondary: 'deepskyblue',

      // UI
      appBg: thunderTheme.neutralLightest,
      appContentBg: thunderTheme.neutralLighter,

      // Text colors
      textColor: thunderTheme.neutral,

      // Toolbar default and active colors
      barTextColor: thunderTheme.neutral,
      barSelectedColor: thunderTheme.neutralStronger,
      barBg: thunderTheme.neutralLightest,

      brandTitle: 'Habx Thunder UI'
    })
  }
})

const req = process.env.NODE_ENV === 'test' ?
  require('./requireContext')('../src', true, /\.stories\.(tsx)$/) :
  require.context('../src/', true, /\.stories\.(tsx)$/)

function loadStories () {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
