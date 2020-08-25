import * as React from 'react'

import getFlattenedChildren from '../_internal/getFlattenedChildren'
import BreadcrumbItem from '../BreadcrumbItem'
import Menu from '../Menu'
import MenuLine from '../MenuLine'

import BreadcrumbContext from './Breadcrumb.context'
import BreadcrumbProps from './Breadcrumb.interface'
import { BreadcrumbContainer, BreadcrumbIcon } from './Breadcrumb.style'

const Breadcrumb = React.forwardRef<HTMLDivElement, BreadcrumbProps>(
  (props, ref) => {
    const { children, large, small, ...rest } = props

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
        <BreadcrumbContainer ref={ref} {...rest}>
          {items.length > 5 ? (
            <React.Fragment>
              {[...items].slice(0, 2).map((item, index) => (
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
                {[...items].slice(3, items.length - 3).map((item, index) => (
                  <MenuLine key={index}>{item}</MenuLine>
                ))}
              </Menu>
              <BreadcrumbIcon icon="chevron-east" />
              {[...items]
                .slice(items.length - 2, items.length)
                .map((item, index) => (
                  <React.Fragment key={`last-${index}`}>
                    {item}
                    {index < 1 && <BreadcrumbIcon icon="chevron-east" />}
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

export default Breadcrumb
