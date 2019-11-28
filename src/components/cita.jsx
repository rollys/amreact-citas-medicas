import React, { Component } from 'react'

class Cita extends Component {
  render() {
    const { name, lastname, rol, date, time, description } = this.props
    return (
      <div
        className="card"
        style={{
          maxWidth: 250,
        }}>
        <div className="card-body">
          <h5 className="card-header">{rol}</h5>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Nombre: </strong>
              {name}
            </li>
            <li className="list-group-item">
              <strong>Apellidos: </strong>
              {lastname}
            </li>
            <li className="list-group-item">
              <strong>Fecha: </strong>
              {date}
            </li>
            <li className="list-group-item">
              <strong>Hora: </strong>
              {time}
            </li>
            <li className="list-group-item">
              <strong>Síntomas: </strong>
              {description}
            </li>
          </ul>
        </div>
        <div className="card-footer">
          <button type="button" className="btn btn-danger float-right">
            Eliminar
          </button>
        </div>
      </div>
    )
  }
}

export default Cita
