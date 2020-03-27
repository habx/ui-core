import { withKnobs } from '@storybook/addon-knobs'
import * as React from 'react'

import withGrid from '../_internal/StorybookGrid'
import BreadcrumbItem from '../BreadcrumbItem'
import Icon from '../Icon'

import Breadcrumb from './Breadcrumb'
import BreadcrumbProps from './Breadcrumb.interface'

export default {
  title: 'Navigation/Breadcrumb',
  decorators: [withKnobs],
}

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
    props: { size: 'small' as 'small' },
  },
  {
    label: 'Regular',
  },
  {
    label: 'Large',
    props: { size: 'large' as 'large' },
  },
]

const Grid = withGrid<BreadcrumbProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
  itemHorizontalSpace: 36,
})(Breadcrumb)

export const galery = () => <Grid />
