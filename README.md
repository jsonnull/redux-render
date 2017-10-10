# Redux Render

[![Build Status](https://travis-ci.org/jsonnull/redux-render.svg?branch=master)](https://travis-ci.org/jsonnull/redux-render)
[![Coverage Status](https://coveralls.io/repos/github/jsonnull/redux-render/badge.svg?branch=master)](https://coveralls.io/github/jsonnull/redux-render?branch=master)
[![npm version](https://img.shields.io/npm/v/redux-render.svg)](https://www.npmjs.com/package/redux-render)

React bindings for Redux using render props.

```JavaScript
const Title = () => (
  <Redux selector={state => state.title}>
    {title => (
      <h1>{title}</h1>
    )}
  </Redux>
)
```

## Why use this?

Render props afford you a lot of flexibility over Higher-Order Components (HOCs).

 - **Reactivity**: Change selectors or dispatch calls on the fly as your component state and props change.
 - **Brevity**: It starts at just one line of code to connect to Redux in a performant way.
 - **Flexibility**: Using render props, you can easily create HOCs to support your own use-cases.

## Installation

```sh
yarn add redux-render

# npm install --save redux-render
```

## Examples

 - Controlled input ([source](examples/), [CodeSandbox](https://codesandbox.io/s/vnk2qzov65))

## [API](docs/API.md)
 - [`<Provider store>`](docs/API.md#provider-store)
 - [`<Redux selector children>`](docs/API.md#redux-selector-children)
