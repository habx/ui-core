import * as React from 'react'

import NotificationList from '../notify/NotificationList'
import PromptModals from '../prompt/PromptModals'
import PromptLightBoxs from '../promptFullScreen/PromptLightBoxs'

import ThunderProviderProps from './Provider.interface'

const Provider: React.FunctionComponent<ThunderProviderProps> = ({
  children,
}) => (
  <React.Fragment>
    {children}
    <NotificationList />
    <PromptModals />
    <PromptLightBoxs />
  </React.Fragment>
)

export default Provider
