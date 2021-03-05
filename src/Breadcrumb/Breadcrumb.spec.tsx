import { render } from '@testing-library/react'
import * as React from 'react'
import sinon from 'sinon'

import * as validityCheck from '../_internal/validityCheck'
import { BreadcrumbItem } from '../BreadcrumbItem'

import { Breadcrumb } from './index'

import '@testing-library/jest-dom/extend-expect'

jest.useFakeTimers()
const sinonSandbox = sinon.createSandbox()

describe('Breadcrumb component', () => {
  afterEach(() => {
    sinonSandbox.restore()
  })

  it('should render each BreadcrumbItem', async () => {
    const { queryAllByTestId } = render(
      <Breadcrumb>
        <BreadcrumbItem />
        <BreadcrumbItem />
      </Breadcrumb>
    )

    const items = queryAllByTestId('breadcrumb-item')

    expect(items).toHaveLength(2)
  })

  it('should render right amont of children', async () => {
    const { queryByTestId } = render(
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
    const { queryByTestId } = render(
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

    render(<Breadcrumb maxItems={0} />)

    expect(logWarnStub.called).toBe(true)
  })
})
