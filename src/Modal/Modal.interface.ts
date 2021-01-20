import { Modal } from '@delangle/use-modal'
import * as React from 'react'

import { WithTriggerElement } from '../withTriggerElement'

export interface ModalInnerProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean
  onClose?: () => void
  title?: string
  persistent?: boolean
  animated?: boolean
  alwaysRenderChildren?: boolean
  width?: 'small' | 'regular' | 'large'

  /**
   * Value cached from the last time the modal was opening / opened
   * Can be useful if you want to keep Modal UI consistent during `closing` phase while resetting your application state.
   * For instance :
   * ```tsx
   * const MyComponent = () => {
   *   const [selectedRow, setSelectedRow] = React.useState(null)
   *
   *   return (
   *     <React.Fragment>
   *       <MyTable onSelectRow={setSelectedRow} />
   *       <Modal>
   *         {modal => modal.state !== ModalState.closed && <EditRow value={modal.value} />}
   *       </Modal>
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

export interface ModalProps
  extends WithTriggerElement<ModalInnerProps, HTMLDivElement> {}
