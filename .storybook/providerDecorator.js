import * as React from 'react'
import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'
import { useDarkMode } from 'storybook-dark-mode';

import { Provider } from '../src/Provider'
import { Background } from '../src/Background'
import { palette } from '../src/palette'

const FONT_ROOT = 'https://cdn.habx.com/assets/fonts'

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
  
  * {
    box-sizing: border-box;
  }
  

`

export const providerDecorator = (storyFn) => {
  const isDark = useDarkMode()
  return (
    <React.Fragment>
      <Provider>
        <GlobalStyle/>
        <Background backgroundColor={isDark ? palette.neutralBlackWithIntensityFading[800] :  palette.neutralBlackWithIntensityFading[0]}>
          {storyFn()}
        </Background>
      </Provider>
    </React.Fragment>
  )
}
