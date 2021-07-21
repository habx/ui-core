import { render } from '@testing-library/react'
import * as React from 'react'
import sinon from 'sinon'

import * as validityCheck from '../_internal/validityCheck'
import { BreadcrumbItem } from '../BreadcrumbItem'
import { Provider } from '../Provider'

import { Breadcrumb } from '.'

import '@testing-library/jest-dom/extend-expect'
import { BreadcrumbProps } from './Breadcrumb.interface'

jest.useFakeTimers()
const sinonSandbox = sinon.createSandbox()

const renderBreadcrumb = (element: React.ReactElement<BreadcrumbProps>) =>
  render(element, { wrapper: Provider })

describe('Breadcrumb component', () => {
  afterEach(() => {
    sinonSandbox.restore()
  })

  it('should render each BreadcrumbItem', async () => {
    const { queryAllByTestId } = renderBreadcrumb(
      <Breadcrumb>
        <BreadcrumbItem />
        <BreadcrumbItem />
      </Breadcrumb>
    )

    const items = queryAllByTestId('breadcrumb-item')

    expect(items).toHaveLength(2)
  })

  it('should render right amont of children', async () => {
    const { queryByTestId } = renderBreadcrumb(
      <Breadcrumb>
        <BreadcrumbItem />
        <BreadcrumbItem />
      </Breadcrumb>
    )

    const container = queryByTestId('breadcrumb-container')

    // items + chevrons
    expect(container?.children).toHaveLength(3)
  })

  it('should not render more than max items', async () => {
    const MAX_ITEMS = 3
    const { queryByTestId } = renderBreadcrumb(
      <Breadcrumb maxItems={MAX_ITEMS}>
        <BreadcrumbItem />
        <BreadcrumbItem />
        <BreadcrumbItem />
        <BreadcrumbItem />
        <BreadcrumbItem />
      </Breadcrumb>
    )

    const container = queryByTestId('breadcrumb-container')

    // items + chevrons
    expect(container?.children).toHaveLength(MAX_ITEMS * 2 - 1)
  })
  it('should warn if maxItems < 3', async () => {
    const logWarnStub = sinonSandbox.stub(validityCheck, 'logWarn')

    renderBreadcrumb(<Breadcrumb maxItems={0} />)

    expect(logWarnStub.called).toBe(true)
  })
})
