import * as React from 'react'
import styled from 'styled-components'

import withGrid from '../_internal/StorybookGrid'
import ActionBar from '../ActionBar'
import Button from '../Button'
import PhoneInput from '../PhoneInput'
import Text from '../Text'
import TextInput from '../TextInput'

import Modal, { ModalProps } from './index'

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
      <ActionBar>
        <Button>{"Valider l'horaire"}</Button>
      </ActionBar>
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

const ScrollableContentWithActionBar: React.FunctionComponent<{}> = () => (
  <div>
    {Array.from({ length: 20 }, (_, index) => (
      <Line>Item {index + 1}</Line>
    ))}
    <ActionBar>
      <Button outline>Cancel</Button>
      <Button>Validate</Button>
    </ActionBar>
  </div>
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
    label: 'Short with action bar',
  },
  {
    props: {
      title: 'Me recontacter',
      children: <ContactForm />,
    },
    label: 'Short with action bar and title',
  },
  {
    props: {
      title: 'Item list',
      children: <ScrollableContent />,
    },
    label: 'Scrollable',
  },
  {
    props: {
      title: 'Item list',
      children: <ScrollableContentWithActionBar />,
    },
    label: 'Scrollable with action bar',
  },
]

const Grid = withGrid<ModalProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
  itemHorizontalSpace: 36,
})(Modal)

export default {
  title: 'Modals/Modal',
  component: Modal,
}

export const basic = (props: ModalProps) => (
  <Modal triggerElement={<Button outline>Open</Button>} {...props} />
)

basic.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=62%3A2',
    },
  },
}

export const gallery = () => <Grid />
