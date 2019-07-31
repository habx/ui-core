import { withKnobs, boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { withDesign } from 'storybook-addon-designs'
import styled from 'styled-components'

import Background from '../Background'
import palette from '../palette'
import Title from '../Title'

import NavigationButton from './NavigationButton'
import NavigationButtonProps from './NavigationButton.interface'

const StoryContainer = styled.div`
  margin: 64px;
`

const LineContainer = styled.div`
  padding: 12px 48px 36px 48px;
`

const NavigationButtonList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 8px -8px -8px -8px;

  & > div {
    display: flex;
    flex-wrap: wrap;
    padding: 8px;
  }

  & button {
    margin: 8px 16px;
  }
`

const createLine = (title: string, props: NavigationButtonProps) => {
  const getContent = () => (
    <React.Fragment>
      <NavigationButton {...props} />
      <NavigationButton {...props} secondary />
      <NavigationButton {...props} disabled />
      <NavigationButton {...props} previous />
    </React.Fragment>
  )

  return (
    <LineContainer>
      <Title type="section">{title}</Title>
      <NavigationButtonList>
        {getContent()}
        <Background backgroundColor={palette.green[600]}>
          {getContent()}
        </Background>
      </NavigationButtonList>
    </LineContainer>
  )
}

storiesOf('Actions|NavigationButton', module)
  .addDecorator(withDesign)
  .addDecorator(withKnobs)
  .add('gallery', () => (
    <StoryContainer>
      {createLine('White background', {})}
      {createLine('Size : large', { large: true })}
      {createLine('Size : small', { small: true })}
    </StoryContainer>
  ))
  .add('dynamic', () => (
    <NavigationButton
      disabled={boolean('Disabled', false)}
      secondary={boolean('Color override : Secondary', false)}
      previous={boolean('Icon: previous', false)}
    />
  ))
