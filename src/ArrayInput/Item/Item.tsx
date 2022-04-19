import * as React from 'react'

import { ControlledExpansionPanelItem } from '../../ExpansionPanelItem'
import { IconButton } from '../../IconButton'
import { Tooltip } from '../../Tooltip'
import {
  ItemHeaderContainer,
  ItemHeaderContent,
  ItemActions,
} from '../ArrayInput.style'

import { ItemProps } from './Item.interface'
import { ItemContent } from './Item.style'

// Do not open expansion panel item if we click inside ActionsContainer
const stopPropagation = (e: React.MouseEvent) => e.stopPropagation()

export const Item: React.FunctionComponent<React.PropsWithChildren<ItemProps>> =
  ({
    item,
    index,
    canBeReordered,
    canBeDeleted = true,
    disabled,
    onReorder,
    onDelete,
    onClick,
    open,
    renderItem,
    renderItemTitle,
    renderItemActions,
    deleteIconTooltip,
    ...rest
  }) => {
    const handleDelete = () => {
      onDelete?.(index)
    }

    const handleMoveUp = () => {
      if (index > 0) {
        onReorder?.(index, index - 1)
      }
    }

    const state = { index, value: item, editing: open }

    const deleteItemIcon = (
      <IconButton
        icon="trash-outline"
        onClick={handleDelete}
        small
        data-testid="array-input-item-delete"
        disabled={!canBeDeleted}
      />
    )

    const header = (
      <ItemHeaderContainer
        onClick={onClick}
        data-testid="array-input-item-header"
      >
        <ItemHeaderContent>{renderItemTitle?.(state)}</ItemHeaderContent>
        <ItemActions onClick={stopPropagation}>
          {renderItemActions?.(state)}
          {!disabled && !!onReorder && (
            <IconButton
              disabled={!canBeReordered}
              data-disabled={index === 0}
              data-testid="array-input-item-move-up"
              icon="arrow-north"
              onClick={handleMoveUp}
              small
            />
          )}
          {!disabled && (!!onDelete || !!deleteIconTooltip) && (
            <React.Fragment>
              {!!deleteIconTooltip ? (
                <Tooltip title={deleteIconTooltip}>
                  <div>{deleteItemIcon}</div>
                </Tooltip>
              ) : (
                deleteItemIcon
              )}
            </React.Fragment>
          )}
          <IconButton
            icon={open ? 'chevron-north' : 'chevron-south'}
            small
            onClick={onClick}
          />
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
