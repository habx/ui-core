import * as React from 'react'

import { Provider as WindowProvider } from '../_internal/useWindowSize'
import { AlertList } from '../alert/AlertList'
import { ToasterList } from '../notify/ToasterList'
import { PromptModals } from '../prompt/PromptModals'

import { CssVariables } from './CssVariables'
import { ProviderProps } from './Provider.interface'

export const Provider: React.FunctionComponent<ProviderProps> = ({
  children,
}) => (
  <WindowProvider>
    <AlertList />
    {children}
    <ToasterList />
    <PromptModals />
    <CssVariables />
  </WindowProvider>
)
