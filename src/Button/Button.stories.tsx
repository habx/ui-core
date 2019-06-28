import { withKnobs, boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { withDesign } from 'storybook-addon-designs'
import styled from 'styled-components'

import Facebook from '../icons/Facebook'
import Title from '../Title'

import Button from './index'

const StoryContainer = styled.div`
  margin: 64px;
`

const LineContainer = styled.div`
  margin-bottom: 24px;
`

const ButtonList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 8px -8px -8px -8px;

  & > button {
    margin: 8px;
  }
`

const createLine = (title, props) => (
  <LineContainer>
    <Title type="columnTitle">{title}</Title>
    <ButtonList>
      <Button {...props}>Voir tous nos projets</Button>
      <Button {...props} disabled>
        Voir tous nos projets
      </Button>
      <Button {...props} iconLeft={<Facebook />}>
        Partager
      </Button>
      <Button {...props} iconRight={<Facebook />}>
        Partager
      </Button>
      <Button {...props} warning>
        Supprimer
      </Button>
    </ButtonList>
  </LineContainer>
)

storiesOf('Actions|Button', module)
  .addDecorator(withDesign)
  .addDecorator(withKnobs)
  .add(
    'gallery',
    () => (
      <StoryContainer>
        {createLine('Solid + regular', {})}
        {createLine('Solid + small', { small: true })}
        {createLine('Solid + large', { large: true })}
        {createLine('Outline + regular', { outline: true })}
        {createLine('Outline + small', { outline: true, small: true })}
        {createLine('Outline + large', { outline: true, large: true })}
        {createLine('Link + regular', { link: true })}
        {createLine('Link + small', { link: true, small: true })}
        {createLine('Link + large', { link: true, large: true })}
      </StoryContainer>
    ),
    {
      design: {
        type: 'figma',
        url:
          'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=18%3A1250',
      },
    }
  )
  .add('dynamic', () => (
    <Button
      outline={boolean('Outline', false)}
      link={boolean('Link', false)}
      small={boolean('Small', false)}
      large={boolean('Large', false)}
      primary={boolean('Color override : Primary', false)}
      secondary={boolean('Color override : Secondary', false)}
      warning={boolean('Color override : Warning', false)}
      iconLeft={boolean('Icon left', false) ? <Facebook /> : null}
      iconRight={boolean('Icon right', false) ? <Facebook /> : null}
    >
      Voir tous nos projets
    </Button>
  ))
