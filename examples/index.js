import React from 'react'
import ReactDom from 'react-dom'
import { createStore } from 'redux'
import { Provider, Redux } from 'redux-render'

const initialState = {
  text: 'type here'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_TEXT':
      return { ...state, text: action.text }
    default:
      return state
  }
}

const store = createStore(reducer)

const updateText = text => ({
  type: 'UPDATE_TEXT',
  text: text
})

const App = () => (
  <Redux selector={state => state.text}>
    {(text, dispatch) => (
      <div>
        <input
          type="text"
          value={text}
          onChange={e => dispatch(updateText(e.target.value))}
        />
        <p>Value: {text}</p>
      </div>
    )}
  </Redux>
)

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
