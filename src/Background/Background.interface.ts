import * as React from 'react'

import { ColorGetter } from '../_internal/theme/BackgroundThemeProvider'
import { styledAs } from '../_internal/types'

export interface BackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Background of the element
   * Can take the form of a callback function to avoid manually retrieving the theme in your application
   */
  backgroundColor: ColorGetter

  /**
   * If true, it won't apply the theme background to the DOM element. It allows to "fake" the background property for children.
   * @default false
   */
  simulated?: boolean

  /**
   * @ignore
   */
  as?: styledAs
}
