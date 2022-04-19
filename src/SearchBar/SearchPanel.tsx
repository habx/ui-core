import { ModalState } from '@delangle/use-modal'
import * as React from 'react'

import { Icon } from '../Icon'
import { TextInputProps } from '../TextInput'
import { TogglePanelProps, TogglePanelStyleSetter } from '../TogglePanel'

import {
  SearchPanelContainer,
  SearchPanelInputContainer,
  SearchPanelInput,
  SearchPanelInputElementLeft,
  SearchPanelContent,
  TriggerElementContainer,
} from './SearchBar.style'

const setPanelStyle: TogglePanelStyleSetter = (
  dimensions,
  triggerDimensions
) => ({
  top: triggerDimensions.top,
  left: triggerDimensions.left,
  right: window.innerWidth - triggerDimensions.right,
  minWidth: triggerDimensions.width,
  minHeight: triggerDimensions.height,
})

const InnerSearchPanel: React.FunctionComponent<InnerSearchPanelProps> = ({
  value,
  onChange,
  placeholder,
  renderPanel,
  triggerElement,
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    inputRef.current?.focus()
  }, [])

  /*
   * Stop click propagation to avoid focusing search bar when click happens
   * inside SearchPanel
   */
  const handleStopPropagation = (e: React.MouseEvent) => {
    if (e.target === document.activeElement) {
      e.stopPropagation()
    }
  }

  return (
    <React.Fragment>
      <SearchPanelInputContainer>
        <SearchPanelInputElementLeft>
          <Icon icon="magnify-left" />
        </SearchPanelInputElementLeft>
        <SearchPanelInput
          ref={inputRef}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        {!!triggerElement && (
          <TriggerElementContainer>{triggerElement}</TriggerElementContainer>
        )}
      </SearchPanelInputContainer>
      <SearchPanelContent onClick={handleStopPropagation}>
        {renderPanel()}
      </SearchPanelContent>
    </React.Fragment>
  )
}

export const SearchPanel: React.FunctionComponent<SearchPanelProps> = ({
  triggerRef,
  triggerElement,
  ...rest
}) => (
  <SearchPanelContainer
    triggerRef={triggerRef}
    triggerElement={triggerElement}
    setStyle={setPanelStyle}
  >
    {(modal) =>
      modal.state !== ModalState.closed && (
        <InnerSearchPanel triggerElement={triggerElement} {...rest} />
      )
    }
  </SearchPanelContainer>
)

interface InnerSearchPanelProps
  extends Pick<TextInputProps, 'value' | 'onChange' | 'placeholder'> {
  renderPanel: () => React.ReactNode
  triggerElement?: JSX.Element
}

interface SearchPanelProps
  extends Pick<TogglePanelProps, 'triggerRef'>,
    InnerSearchPanelProps {}
