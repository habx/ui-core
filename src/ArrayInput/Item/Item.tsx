import * as React from 'react'

import { isFunction } from '../../_internal/data'
import ExpansionPanelItem from '../../ExpansionPanelItem'
import IconButton from '../../IconButton'
import {
  ItemHeaderContainer,
  ItemHeaderContent,
  ItemActions,
} from '../ArrayInput.style'

import ItemProps from './Item.interface'
import { ItemContent } from './Item.style'

const Item: React.FunctionComponent<ItemProps> = ({
  item,
  index,
  canBeReordered,
  disabled,
  onReorder,
  onDelete,
  onClick,
  open,
  renderItem,
  renderItemTitle,
  ...rest
}) => {
  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation()

    if (isFunction(onDelete)) {
      onDelete(index)
    }
  }

  const handleMoveUp = (e: React.MouseEvent) => {
    e.stopPropagation()

    if (isFunction(onReorder) && index > 0) {
      onReorder(index, index - 1)
    }
  }

  const state = { index, value: item, editing: open }

  const header = (
    <ItemHeaderContainer
      onClick={onClick}
      data-testid="array-input-item-header"
    >
      <ItemHeaderContent>
        {isFunction(renderItemTitle) && renderItemTitle(state)}
      </ItemHeaderContent>
      <ItemActions>
        {!disabled && canBeReordered && (
          <IconButton
            data-disabled={index === 0}
            data-testid="array-input-item-mode-up"
            icon="arrow-north"
            onClick={handleMoveUp}
            small
          />
        )}
        {!disabled && (
          <IconButton
            icon="trash"
            onClick={handleDelete}
            small
            data-testid="array-input-item-delete"
          />
        )}
        <IconButton icon={open ? 'chevron-north' : 'chevron-south'} />
      </ItemActions>
    </ItemHeaderContainer>
  )

  return (
    <ExpansionPanelItem
      header={header}
      open={open}
      data-testid="array-input-item"
      {...rest}
    >
      <ItemContent>{isFunction(renderItem) && renderItem(state)}</ItemContent>
    </ExpansionPanelItem>
  )
}

export default Item
