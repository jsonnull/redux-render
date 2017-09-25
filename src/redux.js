import React from 'react'
import PropTypes from 'prop-types'

class Redux extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.selectorToState = this.selectorToState.bind(this)
  }

  componentWillMount() {
    const store = this.context.reduxRenderStore

    // Set up store subscription
    store.subscribe(() => {
      this.selectorToState()
    })

    // Get initial state
    this.selectorToState()
  }

  selectorToState() {
    const { selector } = this.props
    const store = this.context.reduxRenderStore
    const state = selector(store.getState())
    if (state !== this.state) {
      this.setState(state)
    }
  }

  render() {
    return this.props.children(
      this.state,
      this.context.reduxRenderStore.dispatch
    )
  }
}

Redux.contextTypes = {
  reduxRenderStore: PropTypes.object
}

export default Redux
