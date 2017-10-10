# API

### `<Provider store>`

Provides a redux store to your app. Use this once near the root of your application to make the store available to descendents.

#### Props

 - `store` (*[Redux Store](http://redux.js.org/docs/api/Store.html)*): The Redux store you want to provide.

*Note:* At this time, nesting is not supported. If this use-case is important to you, feel free to let me know so I can prioritize accordingly.
#### Example

```JavaScript
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
```

### `<Redux selector children>`

This connector component retrieves data from the store and makes dispatch available to children.

#### Props

 - `selector` (*state -> any*): The selector function which operates on `store.getState()`. The return value is passed as the first argument to `children`.
 - `children` (*(selectedState, dispatch) -> ReactElement*): Function which receives the selected state and returns a React element tree.

`selector` is run on each store change. The Redux component will only trigger a re-render if the result is different from the previous result, using a strict equality check. This means you can optimize rendering easily using memoized selectors.

`children` is called on each render to return a new React element tree. It is passed the selected state as the first parameter, and the store's `dispatch` method as the second parameter. See `selector` to see when store changes trigger a re-render.

#### Examples

##### Basic

```JavaScript
const Title = () => (
  <Redux selector={state => state.title}>
    {title => <h1>{title}</h1>}
  </Redux>
)
```

##### Controlled input

```JavaScript
const ControlledInput = () => (
  <Redux selector={state => state.text}>
    {(text, dispatch) => (
      <input
        type="text"
        value={text}
        onChange={e => dispatch(updateText(e.target.value))}
      />
    )}
  </Redux>
)
```

##### Using chilren prop

```JavaScript

const selector = state => state.title

const Title = (title) => (
  <h1>{title}</h1>
)

const ConnectedTitle = () => (
  <Redux selector={selector} children={Title} />
)
```
