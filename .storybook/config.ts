import { configure, addDecorator, addParameters } from '@storybook/react'
import centered from '@storybook/addon-centered'
import { create } from '@storybook/theming'

import providerDecorator from './providerDecorator'

addDecorator(centered)
addDecorator(providerDecorator)

addParameters({
  options: {
    sortStoriesByKind: true,
    theme: create({
      base: 'light',
      brandTitle: 'Habx'
    })
  }
})

const req = process.env.NODE_ENV === 'test' ?
  require('./requireContext')('../src', true, /\.stories\.(tsx)$/) :
  require.context('../src/', true, /\.stories\.(tsx)$/)

function loadStories () {
  req.keys().forEach((filename: string) => req(filename))
}

configure(loadStories, module)
