import * as React from 'react'
import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

import ThunderProvider from '../src/ThunderProvider'
import theme from '../src/theme'

const FONT_ROOT = 'https://cdn.habx.fr/assets/fonts'

const GlobalStyle = createGlobalStyle`
  ${styledNormalize};

  @font-face {
    font-family: "Inter UI";
    font-style: normal;
    font-weight: 400;
    src: url("${FONT_ROOT}/inter_ui/regular.otf") format("opentype");
  }

  @font-face {
    font-family: "Inter UI";
    font-style: normal;
    font-weight: 500;
    src: url("${FONT_ROOT}/inter_ui/medium.otf") format("opentype");
  }

  @font-face {
    font-family: "Inter UI";
    font-style: normal;
    font-weight: 600;
    src: url("${FONT_ROOT}/inter_ui/semibold.otf") format("opentype");
  }

  @font-face {
    font-family: "Inter UI";
    font-style: normal;
    font-weight: 700;
    src: url("${FONT_ROOT}/inter_ui/bold.otf") format("opentype");
  }

  body {
    background: ${theme.get('neutralLighter')};
    color: ${theme.get('neutral')};
    font-family: Inter UI;
  }
`

export default (theme = 'light' as 'light' | 'dark') => storyFn => (
  <ThunderProvider theme={theme}>
    <GlobalStyle />
    {storyFn()}
  </ThunderProvider>
)
