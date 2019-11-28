import React, { Component } from 'react'
import Cita from './cita'

class ListaCitas extends Component {
  render() {
    const { listaCitas } = this.props
    return (
      <div className="jumbotron">
        <div className="card-deck">
          {listaCitas.map(item => {
            return <Cita key={item.id} {...item} />
          })}
        </div>
      </div>
    )
  }
}

export default ListaCitas
