import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { withDesign } from 'storybook-addon-designs'
import styled from 'styled-components'

import Title from '../Title'

import Button from './index'

const ButtonContainer = styled.div`
  margin: 64px;
`

const ButtonSizeContainer = styled.div`
  margin-bottom: 24px;
`

export const ButtonList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 8px -8px -8px -8px;

  & > button {
    margin: 8px;
  }
`

storiesOf('Actions|Button', module)
  .addDecorator(withDesign)
  .add(
    'full example',
    () => (
      <ButtonContainer>
        <ButtonSizeContainer>
          <Title type="columnTitle">Taille "regular"</Title>
          <ButtonList>
            <Button>Voir tous nos projets</Button>
            <Button outline>Voir tous nos projets</Button>
            <Button disabled>Voir tous nos projets</Button>
            <Button outline disabled>
              Voir tous nos projets
            </Button>
            <Button showArrow>Voir tous nos projets</Button>
          </ButtonList>
        </ButtonSizeContainer>

        <ButtonSizeContainer>
          <Title type="columnTitle">Taille "small"</Title>
          <ButtonList>
            <Button small>Voir tous nos projets</Button>
            <Button small outline>
              Voir tous nos projets
            </Button>
            <Button small disabled>
              Voir tous nos projets
            </Button>
            <Button small outline disabled>
              Voir tous nos projets
            </Button>
            <Button small showArrow>
              Voir tous nos projets
            </Button>
          </ButtonList>
        </ButtonSizeContainer>

        <ButtonSizeContainer>
          <Title type="columnTitle">Taille "large"</Title>
          <ButtonList>
            <Button large>Voir tous nos projets</Button>
            <Button large outline>
              Voir tous nos projets
            </Button>
            <Button large disabled>
              Voir tous nos projets
            </Button>
            <Button large outline disabled>
              Voir tous nos projets
            </Button>
            <Button large showArrow>
              Voir tous nos projets
            </Button>
          </ButtonList>
        </ButtonSizeContainer>
      </ButtonContainer>
    ),
    {
      design: {
        type: 'figma',
        url:
          'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=18%3A1250',
      },
    }
  )
