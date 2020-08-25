import { render } from '@testing-library/react'
import * as React from 'react'
import sinon from 'sinon'

import withMarkdown from './index'

describe('withMarkdown high order component', () => {
  it('should not parse markdown if props.markdown != true', () => {
    const SpyComponent = sinon.spy((props) => props.children)
    const WrappedComponent = withMarkdown()(SpyComponent)

    render(<WrappedComponent>**Content**</WrappedComponent>)

    const { children, dangerouslySetInnerHTML } = SpyComponent.lastCall.args[0]

    expect(children).toEqual('**Content**')
    expect(dangerouslySetInnerHTML).not.toBeDefined()
  })

  it('should parse markdown in a paragraph if props.markdown = true and config.inline not defined', () => {
    const SpyComponent = sinon.spy((_props) => null)
    const WrappedComponent = withMarkdown()(SpyComponent)

    render(<WrappedComponent markdown>**Content**</WrappedComponent>)

    const { children, dangerouslySetInnerHTML } = SpyComponent.lastCall.args[0]

    expect(children).not.toBeDefined()
    expect(dangerouslySetInnerHTML).toBeDefined()

    expect(dangerouslySetInnerHTML.__html.trim()).toEqual(
      '<p><strong>Content</strong></p>'
    )
  })

  it('should parse markdown in a paragraph if props.markdown = true and config.inline returns false', () => {
    const SpyComponent = sinon.spy((_props) => null)
    const WrappedComponent = withMarkdown({ inline: () => false })(SpyComponent)

    render(<WrappedComponent markdown>**Content**</WrappedComponent>)

    const { children, dangerouslySetInnerHTML } = SpyComponent.lastCall.args[0]

    expect(children).not.toBeDefined()
    expect(dangerouslySetInnerHTML).toBeDefined()

    expect(dangerouslySetInnerHTML.__html.trim()).toEqual(
      '<p><strong>Content</strong></p>'
    )
  })

  it('should parse markdown without a paragraph if props.markdown = true and config.inline returns true', () => {
    const SpyComponent = sinon.spy((_props) => null)
    const WrappedComponent = withMarkdown({ inline: () => true })(SpyComponent)

    render(<WrappedComponent markdown>**Content**</WrappedComponent>)

    const { children, dangerouslySetInnerHTML } = SpyComponent.lastCall.args[0]

    expect(children).not.toBeDefined()
    expect(dangerouslySetInnerHTML).toBeDefined()

    expect(dangerouslySetInnerHTML.__html.trim()).toEqual(
      '<strong>Content</strong>'
    )
  })
})
