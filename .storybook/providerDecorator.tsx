import * as React from 'react'
import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

import Provider from '../src/Provider'
import ThemeProvider from '../src/ThemeProvider'

const FONT_ROOT = 'https://cdn.habx.fr/assets/fonts'

const GlobalStyle = createGlobalStyle`
  ${styledNormalize};
  
  html {
    -moz-osx-font-smoothing: grayscale;
    font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
  }

  @font-face {
    font-family: 'EuclidCircularB';
    src: url('${FONT_ROOT}/euclid/regular.woff2') format('woff2'),
         url('${FONT_ROOT}/euclid/regular.woff') format('woff'),
         url('${FONT_ROOT}/euclid/regular.eot') format('eot'),
         local('Sans-Serif');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'EuclidCircularB';
    src: url('${FONT_ROOT}/euclid/medium.woff2') format('woff2'),
         url('${FONT_ROOT}/euclid/medium.woff') format('woff'),
         url('${FONT_ROOT}/euclid/medium.eot') format('eot'),
         local('Sans-Serif');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'EuclidCircularB';
    src: url('${FONT_ROOT}/euclid/semibold.woff2') format('woff2'),
         url('${FONT_ROOT}/euclid/semibold.woff') format('woff'),
         url('${FONT_ROOT}/euclid/semibold.eot') format('eot'),
         local('Sans-Serif');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }  
  
  @font-face {
    font-family: 'habx-icon';
    src:
      url('${FONT_ROOT}/icons/habx.woff2') format('woff2'),
      url('${FONT_ROOT}/icons/habx.woff') format('woff'),
      url('${FONT_ROOT}/icons/habx.eot') format('eot'),
      url('${FONT_ROOT}/icons/habx.eot?#iefix') format('embedded-opentype');
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    font-display: fallback;
  }
  
  
  * {
    box-sizing: border-box;
  }

`

export default (storyFn: Function) => (
  <React.Fragment>
    <ThemeProvider themeFamily='icade' isRoot>
      <Provider>
        <GlobalStyle />
        {storyFn()}
      </Provider>
    </ThemeProvider>
  </React.Fragment>
)
