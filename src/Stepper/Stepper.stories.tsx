import { withKnobs } from '@storybook/addon-knobs'
import * as React from 'react'
import styled from 'styled-components'

import withGrid from '../_internal/StorybookGrid'
import breakpoints from '../breakpoints'
import ExpansionPanelItem from '../ExpansionPanelItem'
import Text from '../Text'

import Stepper from './Stepper'
import StepperProps from './Stepper.interface'

const Container = styled.div`
  width: 450px;

  @media (${breakpoints.below.phone}) {
    width: 100vw;
  }
`

const ExpansionPanelItems = () => (
  <React.Fragment>
    <ExpansionPanelItem title="Article 1">
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
        delectus distinctio eligendi eum exercitationem facilis.
      </Text>
    </ExpansionPanelItem>
    <ExpansionPanelItem title="Article 2" description="description">
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
        delectus distinctio eligendi eum exercitationem facilis.
      </Text>
    </ExpansionPanelItem>
    <ExpansionPanelItem title="Article 3">
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
        delectus distinctio eligendi eum exercitationem facilis.
      </Text>
    </ExpansionPanelItem>
  </React.Fragment>
)

const GRID_PROPS = {
  children: <ExpansionPanelItems />,
}

const GRID_LINES = [{}]

const GRID_ITEMS = [
  {
    label: 'Default',
    props: {
      steps: [
        {
          label: 'First step',
        },
        {
          label: 'Second step',
        },
        {
          label: 'Current step',
        },
        {
          label: 'Future step',
        },
      ],
      currentStepIndex: 2,
    },
  },
  {
    label: 'Disabled step',
    props: {
      steps: [
        {
          label: 'First step',
        },
        {
          label: 'Current step',
        },
        {
          label: 'Disabled step',
          disabled: true,
        },
        {
          label: 'Future step',
        },
      ],
      currentStepIndex: 1,
    },
  },
]

const Grid = withGrid<StepperProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
  itemWrapper: Container,
})(Stepper)

export default {
  title: 'Layouts/Stepper',
  decorators: [withKnobs],
}

export const gallery = () => <Grid />

export const lightBackground = () => <Grid background="light" />

export const darkBackground = () => <Grid background="dark" />
