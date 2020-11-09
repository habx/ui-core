import * as React from 'react'

import { getFlattenedChildren } from '../_internal/getFlattenedChildren'
import { assert } from '../_internal/validityCheck'
import { BreadcrumbItem } from '../BreadcrumbItem'
import { Menu } from '../Menu'
import { MenuLine } from '../MenuLine'

import { BreadcrumbContext } from './Breadcrumb.context'
import { BreadcrumbProps } from './Breadcrumb.interface'
import { BreadcrumbContainer, BreadcrumbIcon } from './Breadcrumb.style'

export const Breadcrumb = React.forwardRef<HTMLDivElement, BreadcrumbProps>(
  (props, ref) => {
    const { children, large, small, maxItems = 4, ...rest } = props

    assert(maxItems > 2, 'Max items should be more than 2')

    const size = React.useMemo(() => {
      if (large) {
        return 'large'
      }
      if (small) {
        return 'small'
      }
      return 'regular'
    }, [small, large])

    const items = getFlattenedChildren(children)
    return (
      <BreadcrumbContext.Provider value={{ size }}>
        <BreadcrumbContainer
          ref={ref}
          {...rest}
          data-testid="breadcrumb-container"
        >
          {items.length > maxItems ? (
            <React.Fragment>
              {/* First item */}
              {[...items].slice(0, 1).map((item, index) => (
                <React.Fragment key={`first-${index}`}>
                  {item}
                  {index < items.length - 1 && (
                    <BreadcrumbIcon icon="chevron-east" />
                  )}
                </React.Fragment>
              ))}
              <Menu
                triggerElement={
                  <BreadcrumbItem>
                    <span>...</span>
                  </BreadcrumbItem>
                }
              >
                {[...items]
                  .slice(1, items.length - maxItems + 2)
                  .map((item, index) => (
                    <MenuLine key={index}>{item}</MenuLine>
                  ))}
              </Menu>
              {/* Last items */}
              <BreadcrumbIcon icon="chevron-east" />
              {[...items]
                .slice(items.length - maxItems + 2, items.length)
                .map((item, index, allItems) => (
                  <React.Fragment key={`last-${index}`}>
                    {item}
                    {allItems.length - 1 !== index && (
                      <BreadcrumbIcon icon="chevron-east" />
                    )}
                  </React.Fragment>
                ))}
            </React.Fragment>
          ) : (
            items.map((item, index) => (
              <React.Fragment key={index}>
                {item}
                {index < items.length - 1 && (
                  <BreadcrumbIcon icon="chevron-east" />
                )}
              </React.Fragment>
            ))
          )}
        </BreadcrumbContainer>
      </BreadcrumbContext.Provider>
    )
  }
)
