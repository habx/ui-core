import * as React from 'react'

import { AlertList } from '../alert/AlertList'
import { ToasterList } from '../notify/ToasterList'
import { PromptModals } from '../prompt/PromptModals'
import { Provider as WindowProvider } from '../useWindowSize'

import { CssVariables } from './CssVariables'
import { ProviderProps } from './Provider.interface'

export const Provider: React.FunctionComponent<
  React.PropsWithChildren<ProviderProps>
> = ({ children }) => (
  <WindowProvider>
    <AlertList />
    {children}
    <ToasterList />
    <PromptModals />
    <CssVariables />
  </WindowProvider>
)
