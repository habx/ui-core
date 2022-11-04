import * as React from 'react'

import { Background } from '../Background'
import { Text } from '../Text'
import { Title } from '../Title'

import { Drawer } from './Drawer'

export default {
  title: 'Layouts/Drawer',
  component: Drawer,
}

export const basic = ({ ...props }) => (
  <Background
    backgroundColor="grey"
    style={{
      height: '90%',
      width: '100%',
      position: 'fixed',
      overscrollBehaviorY: 'contain',
      overflow: 'hidden',
    }}
  >
    <Drawer {...props}>
      <Title type="regular">Voir tous nos projets</Title>
      <br />
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, at atque,
        commodi cum doloremque et eveniet explicabo illo in incidunt itaque
        molestiae natus pariatur, quam quibusdam ullam ut voluptatibus
        voluptatum.
      </Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, at atque,
        commodi cum doloremque et eveniet explicabo illo in incidunt itaque
        molestiae natus pariatur, quam quibusdam ullam ut voluptatibus
        voluptatum.
      </Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, at atque,
        commodi cum doloremque et eveniet explicabo illo in incidunt itaque
        molestiae natus pariatur, quam quibusdam ullam ut voluptatibus
        voluptatum.
      </Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, at atque,
        commodi cum doloremque et eveniet explicabo illo in incidunt itaque
        molestiae natus pariatur, quam quibusdam ullam ut voluptatibus
        voluptatum.
      </Text>
    </Drawer>
  </Background>
)

basic.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/6YvC7xga4rDzN2QbQfIYHl/App---Mobile-responsive?node-id=725%3A20206',
  },
}
