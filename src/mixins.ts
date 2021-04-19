type CssDirections = {
  top?: boolean
  right?: boolean
  bottom?: boolean
  left?: boolean
}

const ALL_CSS_DIRECTIONS: CssDirections = {
  top: true,
  right: true,
  bottom: true,
  left: true,
}

const removeLayoutPaddingMixin = (
  directions: CssDirections = ALL_CSS_DIRECTIONS
) => `
  ${directions.top ? 'margin-top: calc(0px - var(--layout-top-padding));' : ''}
  ${
    directions.right
      ? 'margin-right: calc(0px - var(--layout-right-padding));'
      : ''
  }
  ${
    directions.bottom
      ? 'margin-bottom: calc(0px - var(--layout-bottom-padding));'
      : ''
  }
  ${
    directions.left
      ? 'margin-left: calc(0px - var(--layout-left-padding));'
      : ''
  }
`

const addLayoutPaddingMixin = (
  directions: CssDirections = ALL_CSS_DIRECTIONS
) => `
  ${directions.top ? 'padding-top: var(--layout-top-padding);' : ''}
  ${directions.right ? 'padding-right: var(--layout-right-padding);' : ''}
  ${directions.bottom ? 'padding-bottom: var(--layout-bottom-padding);' : ''}
  ${directions.left ? 'padding-left: var(--layout-left-padding);' : ''}
`

export const mixins = {
  removeLayoutPadding: removeLayoutPaddingMixin,
  addLayoutPadding: addLayoutPaddingMixin,
}
