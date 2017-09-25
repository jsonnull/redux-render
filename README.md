# Redux Render

An alternative React binding for Redux using render props.

[![npm version](https://img.shields.io/npm/v/redux-render.svg?style=flat-square)](https://www.npmjs.com/package/redux-render)

## Installation

```sh
yarn add redux-render

# npm install --save redux-render
```

## What's it like?

```JavaScript
const App = props => (
  <Redux selector={state => state.title}>
    {title => (
      <h1>{title}</h1>
    )}
  </Redux>
)
```

There is also a [full-fledged example](examples/) you can try.
