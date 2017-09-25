import React from 'react'
import PropTypes from 'prop-types'

class Provider extends React.Component {
  constructor(props) {
    super(props)
    this.store = props.store
  }

  getChildContext() {
    return {
      reduxRenderStore: this.store
    }
  }

  render() {
    return React.Children.only(this.props.children)
  }
}

Provider.childContextTypes = {
  reduxRenderStore: PropTypes.object
}

export default Provider
