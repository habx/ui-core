import { withKnobs, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { config } from 'storybook-addon-designs'
import styled from 'styled-components'

import withGrid from '../_internal/StorybookGrid'
import Button from '../Button'
import palette from '../palette'
import theme from '../theme'

import animations from './animations'
import { Animations, Durations } from './animations.interface'

const AnimationCardContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const AnimationCardContent = styled.div<{
  animation: keyof Animations
  duration?: Durations
}>`
  height: 300px;
  width: 300px;
  box-shadow: ${theme.shadow()};
  margin-bottom: 24px;
  background-color: ${palette.darkBlue[300]};

  &:not([data-animated='true']) {
    &:not([data-visible='true']) {
      opacity: 0;
    }
  }

  &[data-animated='true'] {
    animation: ${({ animation: animationName, children, ...props }) =>
      animations(animationName, { testMode: true, ...props })(props)};
  }
`

interface AnimationCardProps {
  visible?: boolean
  duration?: string
  animation: string
}

const AnimationCard: React.FunctionComponent<AnimationCardProps> = ({
  visible = true,
  duration,
  animation,
}) => {
  const [isAnimated, setAnimated] = React.useState<boolean>(false)

  React.useEffect(() => {
    if (isAnimated) {
      const timeout = setTimeout(() => {
        setAnimated(false)
      }, 2000)

      return () => clearTimeout(timeout)
    }
  })

  return (
    <AnimationCardContainer>
      <AnimationCardContent
        data-animated={isAnimated}
        data-visible={visible}
        animation={animation as keyof Animations}
        {...(duration ? { duration: duration as Durations } : {})}
      />
      <Button small onClick={() => setAnimated(prev => !prev)}>
        {isAnimated ? 'Stop' : 'Start'}
      </Button>
    </AnimationCardContainer>
  )
}

const GRID_PROPS = {}

const GRID_LINES = [
  {
    title: 'Animations',
  },
]

const GRID_ITEMS = [
  {
    label: 'Emerge',
    props: {
      animation: 'emerge',
      visible: false,
    },
  },
  {
    label: 'Emerge Z-Slant (from top)',
    props: {
      animation: 'emergeSlantFromTop',
      visible: false,
    },
  },
  {
    label: 'Emerge Z-Slant (from bottom)',
    props: {
      animation: 'emergeSlantFromBottom',
      visible: false,
    },
  },
  {
    label: 'Dive',
    props: {
      animation: 'dive',
    },
  },
  {
    label: 'Dive Z-Slant',
    props: {
      animation: 'diveSlant',
    },
  },
]

const AnimationGrid = withGrid<AnimationCardProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
  itemHorizontalSpace: 36,
})(AnimationCard)

const animationNames = {
  Emerge: 'emerge',
  'Emerge Z-Slant (from top)': 'emergeSlantFromTop',
  'Emerge Z-Slant (from bottom)': 'emergeSlantFromBottom',
  Dive: 'dive',
  'Dive Z-Slant': 'diveSlant',
}

const durations = ['xs', 's', 'm', 'l']

storiesOf('Utility|animations', module)
  .addDecorator(withKnobs)
  .add('gallery', () => <AnimationGrid />, {
    design: config({
      type: 'figma',
      url:
        'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=849%3A0',
    }),
  })
  .add('dynamic', () => {
    const animation = select('Animation', animationNames, 'emerge')

    return (
      <AnimationCard
        animation={animation}
        visible={animation.startsWith('dive')}
        duration={select('Duration', durations, 'l')}
      />
    )
  })
