import { addDecorator, addParameters } from '@storybook/react'
import { create } from '@storybook/theming'

import providerDecorator from './providerDecorator'
import React from 'react'

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
