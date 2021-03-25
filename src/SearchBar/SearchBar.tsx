import * as React from 'react'

import { useMergedRef } from '../_internal/useMergedRef'
import { Icon } from '../Icon'
import { TextInput } from '../TextInput'

import { SearchBarProps } from './SearchBar.interface'
import { SearchPanel } from './SearchPanel'

export const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>(
  (props, ref) => {
    const {
      placeholder,
      value,
      onChange,
      triggerElement,
      renderPanel,
      containerRef: rawContainerRef,
      ...rest
    } = props

    const containerRef = useMergedRef(rawContainerRef)

    return (
      <TextInput
        ref={ref}
        containerRef={containerRef}
        elementLeft={<Icon icon="magnify-left" />}
        elementRight={
          !!triggerElement &&
          !!renderPanel && (
            <SearchPanel
              triggerElement={triggerElement}
              triggerRef={containerRef}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              renderPanel={renderPanel}
            />
          )
        }
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        autoComplete="off"
        {...rest}
      />
    )
  }
)
