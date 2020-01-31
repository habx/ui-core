import * as React from 'react'

import Button from '../Button'
import ExpansionPanel from '../ExpansionPanel'

import ArrayInputProps from './ArrayInput.interface'
import { ArrayInputAction } from './ArrayInput.style'
import Item from './Item'

const ArrayInput = React.forwardRef<HTMLDivElement, ArrayInputProps>(
  (props, ref) => {
    const {
      items = [],
      onAppend = () => {},
      onDelete = () => {},
      onReorder,
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

    const [openedItem, setOpenedItem] = React.useState(-1)
    const itemsRef: React.MutableRefObject<any[]> = React.useRef(items)

    React.useEffect(() => {
      const amount = items.length
      if (amount > itemsRef.current.length) {
        setOpenedItem(amount - 1)
      }

      itemsRef.current = items
    }, [items])

    const renderItem =
      rawRenderItem ||
      (ItemComponent && (props => <ItemComponent {...props} />)) ||
      (() => <div />)
    const renderItemTitle =
      rawRenderItemTitle ||
      (ItemTitleComponent && (props => <ItemTitleComponent {...props} />)) ||
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
            open={openedItem === index}
            disabled={disabled}
            canBeReordered={canBeReordered}
            onDelete={onDelete}
            onReorder={onReorder}
            onClick={() => setOpenedItem(prev => (prev === index ? -1 : index))}
          />
        ))}
        <ArrayInputAction>
          {AddButtonComponent ? (
            <AddButtonComponent onAppend={onAppend} disabled={disabled} />
          ) : (
            <Button
              data-testid="array-input-add"
              disabled={disabled}
              small
              onClick={() => onAppend()}
            >
              {addButtonLabel}
            </Button>
          )}
        </ArrayInputAction>
      </ExpansionPanel>
    )
  }
)

export default ArrayInput
