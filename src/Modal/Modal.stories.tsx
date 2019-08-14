import { storiesOf } from '@storybook/react'
import * as React from 'react'
import styled from 'styled-components'

import withGrid from '../_internal/StorybookGrid'
import Button from '../Button'
import PhoneInput from '../PhoneInput'
import Text from '../Text'
import TextInput from '../TextInput'

import Modal from './Modal'
import ModalProps from './Modal.interface'

const ModalForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 48px;

  & > *:not(:last-child) {
    margin-bottom: 24px;
  }
`

const GRID_PROPS = {
  triggerElement: <Button outline>Open</Button>,
}

const GRID_LINES = [{ title: 'Basic' }]

const GRID_ITEMS = [
  {
    props: {
      title: 'À quel moment vous appeler ?',
      children: (
        <React.Fragment>
          <Text>
            Échangeons de vive voix sur vos souhaits, sur le projet Paris
            Venelles et les prochaines étapes de votre démarche.
          </Text>
          <ModalForm>
            <TextInput placeholder="8h - 10h" />
            <PhoneInput placeholder="votre numéro" />
            <Button>{"Valider l'horaire"}</Button>
          </ModalForm>
        </React.Fragment>
      ),
    },
  },
]

const Grid = withGrid<ModalProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
})(Modal)

storiesOf('Modals|Modal', module).add('galery', () => <Grid />)
