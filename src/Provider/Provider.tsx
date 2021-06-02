import * as React from 'react'

import { AlertList } from '../alert/AlertList'
import { ToasterList } from '../notify/ToasterList'
import { PromptModals } from '../prompt/PromptModals'

import { CssVariables } from './CssVariables'
import { ProviderProps } from './Provider.interface'

export const Provider: React.FunctionComponent<ProviderProps> = ({
  children,
}) => (
  <>
    <AlertList />
    {children}
    <ToasterList />
    <PromptModals />
    <CssVariables />
  </>
)
