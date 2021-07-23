import React from 'react'

import { TabProps } from '../../Tab'

import { TabSelectOptionContainer } from './TabSelectOption.style'

export const TabSelectOption = React.forwardRef<
  HTMLButtonElement,
  TabSelectOptionProps
>((props, ref) => {
  return <TabSelectOptionContainer {...props} ref={ref} />
})

export interface TabSelectOptionProps
  extends Omit<TabProps, 'small' | 'large'> {}
