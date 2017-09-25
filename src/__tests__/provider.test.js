import React from 'react'
import { shallow, mount, render } from 'enzyme'

import Provider from '../provider'

const store = {
  getState: () => 'test'
}

describe('Provider', function() {
  const wrapper = shallow(
    <Provider store={store}>
      <div />
    </Provider>
  )

  it('should render without throwing an error', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('should have store on node', () => {
    expect(wrapper.instance().store).toEqual(store)
  })
})
