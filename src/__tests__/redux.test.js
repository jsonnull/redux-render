import React from 'react'
import { createStore } from 'redux'
import { mount } from 'enzyme'
import { memoize } from 'lodash'

import Redux from '../redux'

const reducer = (state = { test: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { test: state.test + 1 }
    default:
      return state
  }
}

const store = createStore(reducer)

describe('Redux', function() {
  const wrapper = mount(
    <Redux selector={state => state.test}>
      {(test, dispatch) => (
        <div onClick={() => dispatch({ type: 'INCREMENT' })}>{test}</div>
      )}
    </Redux>,
    { context: { reduxRenderStore: store } }
  )

  it('should render without throwing an error', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('should contain the text from the store', () => {
    expect(wrapper.html()).toBe('<div>0</div>')
  })

  it('should change when dispatch is called', () => {
    wrapper.find('div').simulate('click')
    expect(wrapper.html()).toBe('<div>1</div>')
  })

  it('should not re-render when state is same', () => {
    let renderCount = 0

    const memoizedSelector = memoize(state => state.test)
    const wrapper = mount(
      <Redux selector={memoizedSelector}>
        {(test, dispatch) => {
          // Increment the render count to show that a side effect occurred
          renderCount += 1
          return (
            <div onClick={() => dispatch({ type: 'NOT_INCREMENT' })}>
              {test}
            </div>
          )
        }}
      </Redux>,
      { context: { reduxRenderStore: store } }
    )

    expect(renderCount).toBe(1)

    wrapper.find('div').simulate('click')
    expect(renderCount).toBe(1)
  })
})
