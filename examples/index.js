import React from 'react'
import ReactDom from 'react-dom'
import { createStore } from 'redux'
import { Provider, Redux } from '../dist/redux-render'

const initialState = {
  mouse: {
    x: 0,
    y: 0
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MOUSE_MOVED':
      return { ...state, mouse: { x: action.x, y: action.y } }
    default:
      return state
  }
}

const store = createStore(reducer)

const eventToMoveAction = event => ({
  type: 'MOUSE_MOVED',
  x: event.nativeEvent.clientX,
  y: event.nativeEvent.clientY
})

const App = () => {
  return (
    <Redux selector={state => state.mouse}>
      {(mouse, dispatch) => (
        <div
          style={{ height: '100vh' }}
          onMouseMove={e => dispatch(eventToMoveAction(e))}
        >
          Mouse coordinates are ({mouse.x}, {mouse.y})
        </div>
      )}
    </Redux>
  )
}

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
