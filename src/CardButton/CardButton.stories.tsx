import * as React from 'react'
import styled from 'styled-components'

import { withGrid } from '../_storybook/withGrid'
import { Icon } from '../Icon'
import { Text } from '../Text'

import { CardButton, CardButtonProps } from './index'

const Container = styled.div``

const RegularCardButtonContent = styled.div`
  display: flex;
  flex-direction: column;
`

const NarrowCardButtonContent = styled.div`
  display: flex;
  align-items: center;
  width: 480px;
  white-space: nowrap;

  & > *:not(:first-child):not(:last-child) {
    flex: 1 1 100%;
    margin: 0 12px;
  }
`

const GRID_LINES = [
  {
    title: 'Spacing "regular"',
    props: {
      spacing: 'regular' as const,
      children: (
        <RegularCardButtonContent>
          <Text>Version du 17/03/2021</Text>
          <Text type="caption" variation="lowContrast">
            14 références
          </Text>
        </RegularCardButtonContent>
      ),
    },
  },
  {
    title: 'Spacing "narrow"',
    props: {
      spacing: 'narrow' as const,
      children: (
        <NarrowCardButtonContent>
          <Icon icon="clock-restore-outline" />
          <Text>Version du 17/03/2021</Text>
          <Text type="caption" variation="lowContrast">
            14 références
          </Text>
        </NarrowCardButtonContent>
      ),
    },
  },
]

const GRID_ITEMS = [
  {
    label: 'Normal',
  },
  {
    label: 'Disabled',
    props: { disabled: true },
  },
  {
    label: 'Outline',
    props: { outline: true },
  },
  {
    label: 'Active',
    props: { active: true },
  },
]

const Grid = withGrid<CardButtonProps>({
  lines: GRID_LINES,
  items: GRID_ITEMS,
  itemWrapper: Container,
})(CardButton)

export default {
  title: 'Actions/CardButton',
  component: CardButton,
}

export const basic = (props: CardButtonProps) => <CardButton {...props} />

basic.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=4%3A0',
    },
  },
}

export const gallery = () => <Grid />
