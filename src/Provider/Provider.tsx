import * as React from 'react'

import { ToasterList } from '../notify/ToasterList'
import { PromptModals } from '../prompt/PromptModals'

import { CssVariables } from './CssVariables'
import { ProviderProps } from './Provider.interface'

export const Provider: React.FunctionComponent<ProviderProps> = ({
  children,
}) => (
  <>
    {children}
    <ToasterList />
    <PromptModals />
    <CssVariables />
  </>
)
