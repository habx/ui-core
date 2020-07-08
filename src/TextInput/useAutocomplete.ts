import * as React from 'react'

import { searchInString } from '../_internal/strings'
import { useDisableScroll } from '../_internal/useDisableScroll'

type UseAutocompleteOptions = {
  options?: string[]
  ref: React.RefObject<HTMLInputElement>
  value: string | number | readonly string[] | string[] | undefined
}

const MAX_AUTOCOMPLETE_OPTIONS = 3
const useAutocomplete = ({
  options,
  ref,
  value = '',
}: UseAutocompleteOptions) => {
  const [open, setOpen] = React.useState(false)
  const menuRef = React.useRef<HTMLUListElement>(null)
  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current?.contains(e.target as Node) && !open) {
        setOpen(true)
      }
      if (!ref.current?.contains(e.target as Node) && open) {
        setOpen(false)
      }
    }
    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  }, [ref, open])

  useDisableScroll(open)

  const handleFakeOnChange = React.useCallback(
    (fakeValue: string) => (e: React.MouseEvent<HTMLLIElement>) => {
      e.preventDefault()
      e.stopPropagation()
      const input = ref.current as HTMLInputElement & { _valueTracker: any }
      if (input) {
        const lastValue = input.value
        input.value = fakeValue
        const event = new Event('input', { bubbles: true })
        // https://github.com/facebook/react/issues/11488#issuecomment-626192358
        const tracker = input._valueTracker
        if (tracker) {
          tracker.setValue(lastValue)
        }
        input.dispatchEvent(event)
        setOpen(false)
      }
    },
    [ref]
  )

  const visibleOptions = React.useMemo(
    () =>
      options
        ?.filter(
          (option) => searchInString(option, `${value}`) && option !== value
        )
        .filter((_, i) => i < MAX_AUTOCOMPLETE_OPTIONS) ?? [],
    [options, value]
  )

  return {
    menuRef,
    visibleOptions,
    onOptionClick: handleFakeOnChange,
    open: open && visibleOptions.length > 0,
  }
}

export default useAutocomplete
