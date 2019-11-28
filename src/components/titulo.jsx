import React, { Component } from 'react'

class Titulo extends Component {
  render() {
    const { titulo } = this.props
    return (
      <h1 className='text-center'>
        <span className="badge badge-secondary">{titulo}</span>
      </h1>
    )
  }
}

export default Titulo
