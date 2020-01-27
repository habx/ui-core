import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { config } from 'storybook-addon-designs'
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

  & > *:not(:last-child) {
    margin-bottom: 24px;
  }
`

const Line = styled(Text)`
  margin-bottom: 12px;
`

const ContactForm: React.FunctionComponent<{}> = () => (
  <React.Fragment>
    <ModalForm>
      <TextInput placeholder="votre mail" />
      <PhoneInput placeholder="votre numéro" />
      <Button>{"Valider l'horaire"}</Button>
    </ModalForm>
  </React.Fragment>
)

const ScrollableContent: React.FunctionComponent<{}> = () => (
  <React.Fragment>
    {Array.from({ length: 20 }, (_, index) => (
      <Line>Element n°{index + 1}</Line>
    ))}
  </React.Fragment>
)

const GRID_PROPS = {
  triggerElement: <Button outline>Open</Button>,
}

const GRID_LINES = [
  { title: 'Regular' },
  { title: 'Small', props: { width: 'small' as 'small' } },
  { title: 'Large', props: { width: 'large' as 'large' } },
]

const GRID_ITEMS = [
  {
    props: {
      children: <ContactForm />,
    },
    label: 'Short',
  },
  {
    props: {
      title: 'Me recontacter',
      children: <ContactForm />,
    },
    label: 'Short with title',
  },
  {
    props: {
      title: "Liste d'éléments",
      children: <ScrollableContent />,
    },
    label: 'Scrollable',
  },
]

const Grid = withGrid<ModalProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
  itemHorizontalSpace: 36,
})(Modal)

storiesOf('Modals|Modal', module).add('galery', () => <Grid />, {
  design: config({
    type: 'figma',
    url:
      'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=62%3A2',
  }),
})
