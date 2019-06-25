import { configure, addDecorator, StoryDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import centered from '@storybook/addon-centered'

import providerDecorator from './providerDecorator'

addDecorator(withInfo)
addDecorator(centered as StoryDecorator)
addDecorator(providerDecorator)


const req = process.env.NODE_ENV === 'test' ?
  require('./requireContext')('../src', true, /\.stories\.(tsx)$/) :
  require.context('../src/', true, /\.stories\.(tsx)$/)

function loadStories () {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
