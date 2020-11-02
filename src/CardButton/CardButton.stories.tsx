import * as React from 'react'

import { CardButton, CardButtonProps } from './index'

export default {
  title: 'Actions/CardButton',
  component: CardButton,
  argTypes: {
    title: {
      defaultValue: 'Rocket launcher',
    },
    description: {
      defaultValue: 'Accédez au résumé de vos choix, recevez le par mail',
    },
    illustration: {
      defaultValue:
        '//res.cloudinary.com/habx/image/upload/illustrations/habxmojies/rocket.svg',
    },
  },
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
