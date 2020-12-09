import * as React from 'react'

import { ControlledExpansionPanelItem } from '../../ExpansionPanelItem'
import { IconButton } from '../../IconButton'
import {
  ItemHeaderContainer,
  ItemHeaderContent,
  ItemActions,
} from '../ArrayInput.style'

import { ItemProps } from './Item.interface'
import { ItemContent } from './Item.style'

export const Item: React.FunctionComponent<ItemProps> = ({
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
    onDelete?.(index)
  }

  const handleMoveUp = (e: React.MouseEvent) => {
    e.stopPropagation()

    if (index > 0) {
      onReorder?.(index, index - 1)
    }
  }

  const state = { index, value: item, editing: open }

  const header = (
    <ItemHeaderContainer
      onClick={onClick}
      data-testid="array-input-item-header"
    >
      <ItemHeaderContent>{renderItemTitle?.(state)}</ItemHeaderContent>
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
        {!disabled && handleDelete && (
          <IconButton
            icon="trash"
            onClick={handleDelete}
            small
            data-testid="array-input-item-delete"
          />
        )}
        <IconButton icon={open ? 'chevron-north' : 'chevron-south'} small />
      </ItemActions>
    </ItemHeaderContainer>
  )

  return (
    <ControlledExpansionPanelItem
      header={header}
      open={open}
      data-testid="array-input-item"
      {...rest}
    >
      <ItemContent>{renderItem?.(state)}</ItemContent>
    </ControlledExpansionPanelItem>
  )
}
