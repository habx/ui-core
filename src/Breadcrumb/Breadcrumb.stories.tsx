import { withKnobs } from '@storybook/addon-knobs'
import * as React from 'react'

import withGrid from '../_internal/StorybookGrid'
import Icon from '../Icon'
import Text from '../Text'

import Breadcrumb from './Breadcrumb'
import BreadcrumbProps from './Breadcrumb.interface'

export default {
  title: 'Navigation/Breadcrumb',
  decorators: [withKnobs],
}

const GRID_PROPS = {
  children: (
    <React.Fragment>
      <Icon icon="house-building-outline" />
      <Text>Lyon moselle - la fabrique</Text>
      <Text>Configuration</Text>
    </React.Fragment>
  ),
}

const GRID_LINES = [
  {
    title: 'Default',
  },
]

const GRID_ITEMS = [
  {
    label: 'Regular',
  },
  {
    label: 'Small',
    props: { spacing: 'narrow' as 'narrow' },
  },
  {
    label: 'Large',
    props: { spacing: 'large' as 'large', itemMaxWidth: 400 },
  },
]

const Grid = withGrid<BreadcrumbProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
  itemHorizontalSpace: 36,
})(Breadcrumb)

export const galery = () => <Grid />
