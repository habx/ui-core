import withMarkdown from '../withMarkdown'

import Text from './Text'

export { default as TextProps } from './Text.interface'
export { textStyles } from './Text'

export default withMarkdown({ inline: false })(Text)
