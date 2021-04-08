import { addDecorator, addParameters } from '@storybook/react'
import { create } from '@storybook/theming'
import { themes } from '@storybook/theming';

import { providerDecorator } from './providerDecorator'
import React from 'react'
import { palette } from '../src/palette'
import { DEFAULT_THEME } from '../src/theme'

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
  darkMode: {
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
})
