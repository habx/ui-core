import * as React from 'react'

import Button from '../Button'
import ExpansionPanel from '../ExpansionPanel'
import withLabel from '../withLabel'

import { ArrayInputInnerProps } from './ArrayInput.interface'
import { ArrayInputAction } from './ArrayInput.style'
import Item from './Item'

const ArrayInput = React.forwardRef<HTMLDivElement, ArrayInputInnerProps>(
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
    const appendRef = React.useRef(false)

    React.useEffect(() => {
      if (appendRef.current && items.length > 0) {
        setOpenedItem(items.length - 1)
        appendRef.current = false
      }
    }, [items])

    const handleAppend = React.useCallback(
      (value?: any) => {
        appendRef.current = true
        return onAppend(value)
      },
      [onAppend]
    )

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
            <AddButtonComponent onAppend={handleAppend} disabled={disabled} />
          ) : (
            <Button
              data-testid="array-input-add"
              disabled={disabled}
              small
              onClick={() => handleAppend()}
            >
              {addButtonLabel}
            </Button>
          )}
        </ArrayInputAction>
      </ExpansionPanel>
    )
  }
)

export default withLabel<HTMLDivElement>({ orientation: 'vertical' })<
  ArrayInputInnerProps
>(ArrayInput)
