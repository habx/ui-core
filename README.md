
<p align="center">
  <a href="https://habx.github.io/concrete-docs/">
    <img width="200" src="https://habx.github.io/concrete-docs/img/logo.svg">
  </a>
</p>

<h1 align="center">@habx/ui-core</h1>

<div align="center">

[![CircleCI](https://img.shields.io/circleci/build/github/habx/ui-core)](https://app.circleci.com/pipelines/github/habx/ui-core)
[![Version](https://img.shields.io/npm/v/@habx/ui-core)](https://www.npmjs.com/package/@habx/ui-core)
[![Size](https://img.shields.io/bundlephobia/min/@habx/ui-core)](https://bundlephobia.com/result?p=@habx/ui-core)
[![License](https://img.shields.io/github/license/habx/ui-core)](/LICENSE)

Design System used on all the applications developed by HABX

## Instalation
```shell 
npm i @habx/ui-core
 ```
 
#### Add Providers

###### App.ts
```typescript jsx
import { Provider as DesignSystemProvider, ThemeProvider } from '@habx/ui-core'

const App: React.FunctionComponent = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
        <DesignSystemProvider>
            {children}
        </DesignSystemProvider>
    </ThemeProvider>

  )
}
```

[documentation](https://habx.github.io/concrete-docs/)

Test all our component in our [Storybook](https://habx.github.io/ui-core/)
