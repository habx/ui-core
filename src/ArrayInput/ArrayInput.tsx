import * as React from 'react'

import { Button } from '../Button'
import { ExpansionPanel } from '../ExpansionPanel'
import { withLabel } from '../withLabel'

import { ArrayInputInnerProps } from './ArrayInput.interface'
import { ArrayInputAction } from './ArrayInput.style'
import { Item } from './Item'

const DEFAULT_HANDLER = () => {}

export const InnerArrayInput = React.forwardRef<
  HTMLDivElement,
  ArrayInputInnerProps
>((props, ref) => {
  const {
    items = [],
    onAppend = DEFAULT_HANDLER,
    onDelete = () => {},
    onReorder,
    onToggle = DEFAULT_HANDLER,
    openedItemIndex = -1,
    disabled,
    addButtonLabel = 'Ajouter un élément',
    addButtonComponent: AddButtonComponent,
    itemTitleComponent: ItemTitleComponent,
    itemComponent: ItemComponent,
    renderItem: rawRenderItem,
    renderItemTitle: rawRenderItemTitle,
    canBeReordered = false,
    onChange: _onChange,
    ...rest
  } = props

  const [openedIndex, setOpenedItem] = React.useState(openedItemIndex)
  const appendRef = React.useRef(false)

  const handleAppend = React.useCallback(
    (value?: any) => {
      appendRef.current = true
      return onAppend(value)
    },
    [onAppend]
  )

  const handleToggle = React.useCallback(
    (index: number) => {
      onToggle(index)
      setOpenedItem((prev) => (prev === index ? -1 : index))
    },
    [onToggle]
  )

  React.useEffect(() => setOpenedItem(openedItemIndex), [openedItemIndex])

  React.useEffect(() => {
    if (appendRef.current && items.length > 0) {
      handleToggle(items.length - 1)
      appendRef.current = false
    }
  }, [items, handleToggle])

  const renderItem =
    rawRenderItem ||
    (ItemComponent && ((itemProps) => <ItemComponent {...itemProps} />)) ||
    (() => <div />)

  const renderItemTitle =
    rawRenderItemTitle ||
    (ItemTitleComponent &&
      ((itemProps) => <ItemTitleComponent {...itemProps} />)) ||
    (() => <div />)

  return (
    <ExpansionPanel
      data-testid="array-input"
      {...rest}
      disabled={disabled}
      ref={ref}
    >
      {items.map((item, index) => (
        <Item
          key={index}
          renderItem={renderItem}
          renderItemTitle={renderItemTitle}
          item={item}
          index={index}
          open={openedIndex === index}
          disabled={disabled}
          canBeReordered={canBeReordered}
          onDelete={onDelete}
          onReorder={onReorder}
          onClick={() => handleToggle(index)}
        />
      ))}
      <ArrayInputAction>
        {AddButtonComponent ? (
          <AddButtonComponent onAppend={handleAppend} disabled={disabled} />
        ) : (
          <Button
            data-testid="array-input-add"
            disabled={disabled}
            small
            onClick={() => handleAppend()}
            link
          >
            {addButtonLabel}
          </Button>
        )}
      </ArrayInputAction>
    </ExpansionPanel>
  )
})

export const ArrayInput = withLabel<HTMLDivElement>({
  orientation: 'vertical',
})<ArrayInputInnerProps>(InnerArrayInput)
