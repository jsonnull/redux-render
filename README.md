# Redux Render

An alternative React binding for Redux using render props.

[![Build Status](https://travis-ci.org/jsonnull/redux-render.svg?branch=master)](https://travis-ci.org/jsonnull/redux-render)
[![Coverage Status](https://coveralls.io/repos/github/jsonnull/redux-render/badge.svg?branch=master)](https://coveralls.io/github/jsonnull/redux-render?branch=master)
[![npm version](https://img.shields.io/npm/v/redux-render.svg)](https://www.npmjs.com/package/redux-render)

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
