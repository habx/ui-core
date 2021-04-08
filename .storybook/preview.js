import { addDecorator, addParameters } from '@storybook/react'
import { themes } from '@storybook/theming';

import { providerDecorator } from './providerDecorator'
import React from 'react'
import { palette } from '../src/palette'

addDecorator(providerDecorator)

const theme = {
  dark: {
    ...themes.dark,
    appContentBg: palette.neutralBlackWithIntensityFading[800],
    appBg: palette.neutralBlackWithIntensityFading[900],
  },
  light: {
    ...themes.normal,
    appContentBg: palette.neutralBlackWithIntensityFading[0],
    appBg: palette.neutralBlackWithIntensityFading[100],
  }
}

addParameters({
  backgrounds: {
    disable: true,
    grid: {
      disable: true
    }
  },
  options: {
    storySort: {
      order: [
        'Introduction',
        'Actions',
        'Input',
        'Alerts',
        'Navigation',
        'Layouts',
        'Modals',
        'Typography',
        'Utility',
      ],
    },
    sortStoriesByKind: true,
  },
  info: {},
  darkMode: theme,
  docs: {
    theme: theme.light
  }
})
