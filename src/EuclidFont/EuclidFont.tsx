import { createGlobalStyle } from 'styled-components'

const FONT_ROOT = 'https://cdn.habx.com/assets/fonts'

export const EuclidFont = createGlobalStyle`
  @font-face {
    font-family: 'EuclidCircularB';
    src: url('${FONT_ROOT}/euclid/light.woff2') format('woff2'),
    url('${FONT_ROOT}/euclid/light.woff') format('woff'),
    url('${FONT_ROOT}/euclid/light.eot') format('eot'),
    local('Sans-Serif');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
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
`
