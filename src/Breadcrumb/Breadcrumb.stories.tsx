import * as React from 'react'

import { withGrid } from '../_storybook/withGrid'
import { BreadcrumbItem } from '../BreadcrumbItem'
import { Icon } from '../Icon'

import { Breadcrumb, BreadcrumbProps } from './index'

const GRID_PROPS = {}

const GRID_LINES = [
  {
    title: 'Default',
    props: {
      children: (
        <React.Fragment>
          <BreadcrumbItem>
            <Icon icon="house-building-outline" />
          </BreadcrumbItem>
          <BreadcrumbItem>Lyon moselle - la fabrique</BreadcrumbItem>
          <BreadcrumbItem>Configuration</BreadcrumbItem>
        </React.Fragment>
      ),
    },
  },
  {
    title: 'More than 5 nodes',
    props: {
      children: (
        <React.Fragment>
          {new Array(10).fill(0).map((_, index) => (
            <BreadcrumbItem>Branch {index + 1}</BreadcrumbItem>
          ))}
        </React.Fragment>
      ),
    },
  },
]

const GRID_ITEMS = [
  {
    label: 'Small',
    props: { small: true },
  },
  {
    label: 'Regular',
  },
  {
    label: 'Large',
    props: { large: true },
  },
]

const Grid = withGrid<BreadcrumbProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
  itemHorizontalSpace: 36,
})(Breadcrumb)

export default {
  title: 'Navigation/Breadcrumb',
  component: Breadcrumb,
  subcomponents: { BreadcrumbItem },
}

export const basic = (props: BreadcrumbProps) => (
  <Breadcrumb {...props}>{GRID_LINES[0].props.children}</Breadcrumb>
)

export const gallery = () => <Grid />
