import * as React from 'react'
import styled from 'styled-components'

import { withGrid } from '../_storybook/withGrid'
import { breakpoints } from '../breakpoints'

import { Stepper, StepperProps } from './index'

const Container = styled.div`
  width: 450px;

  @media (${breakpoints.below.phone}) {
    width: 100vw;
  }
`

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
  lines: GRID_LINES,
  items: GRID_ITEMS,
  itemWrapper: Container,
})(Stepper)

export default {
  title: 'Layouts/Stepper',
  component: Stepper,
  argTypes: {
    currentStepIndex: {
      defaultValue: 1,
    },
  },
}

export const basic = (props: StepperProps) => (
  <Stepper {...props} steps={GRID_ITEMS[0].props.steps} />
)

export const gallery = () => <Grid />

export const lightBackground = () => <Grid background="light" />

export const darkBackground = () => <Grid background="dark" />
