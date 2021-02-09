import { Modal } from '@delangle/use-modal'
import * as React from 'react'

import { LayoutProps } from '../Layout'
import { WithFloatingPanelBehavior } from '../withFloatingPanelBehavior'
import { WithTriggerElement } from '../withTriggerElement'

export type LightBoxSpacing =
  | 'none'
  | 'narrow'
  | 'regular'
  | 'regular-horizontal-only'
  | 'narrow-horizontal-only'

export interface LightBoxInnerProps extends LayoutProps {
  modal: Modal
  parentFloatingPanelRef: React.RefObject<HTMLElement> | null
  hideCloseIcon?: boolean
  spacing?: LightBoxSpacing

  /**
   * Value cached from the last time the lightbox was opening / opened
   * Can be useful if you want to keep LightBox UI consistent during `closing` phase while resetting your application state.
   * For instance :
   * ```tsx
   * const MyComponent = () => {
   *   const [selectedRow, setSelectedRow] = React.useState(null)
   *
   *   return (
   *     <React.Fragment>
   *       <MyTable onSelectRow={setSelectedRow} />
   *       <LightBox>
   *         {modal => modal.state !== ModalState.closed && <EditRow value={modal.value} />}
   *       </LightBox>
   *     </React.Fragment>
   *   )
   *
   * }
   * ```
   */
  value?: any

  children?:
    | React.ReactNode
    | ((modal: Modal<HTMLDivElement>) => React.ReactNode)
}

export interface LightBoxProps
  extends WithTriggerElement<
    WithFloatingPanelBehavior<LightBoxInnerProps>,
    HTMLDivElement
  > {}
