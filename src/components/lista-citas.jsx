import React, { Component } from 'react'
import Cita from './cita'

class ListaCitas extends Component {
  render() {
    const { listaCitas, eliminarCita } = this.props
    const noHayCitas = <h3 className='text-center w-100 text-danger'>No hay citas!!!</h3>
    const listadoCitas = listaCitas.map(item => {
      return <Cita key={item.id} {...item} eliminarCita={eliminarCita} />
    })
    return (
      <div className="jumbotron">
        <div className="card-deck">
          {listaCitas.length > 0 ? listadoCitas : noHayCitas}
        </div>
      </div>
    )
  }
}

export default ListaCitas
