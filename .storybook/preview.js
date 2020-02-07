import { addDecorator, addParameters } from '@storybook/react'
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
  },
  info: {},
})
