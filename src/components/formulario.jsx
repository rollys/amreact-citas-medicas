import React, { Component } from 'react'
import uuid from 'uuid'

const STATE_INICIAL = {
  cita: {
    name: '',
    lastname: '',
    rol: '',
    date: '',
    time: '',
    description: '',
    id: '',
  },
  error: false,
}
class Formulario extends Component {
  constructor() {
    super()
    this.state = STATE_INICIAL
  }

  handleChange = e => {
    // console.log(e.target.name, e.target.value)
    this.setState({
      cita: {
        ...this.state.cita,
        [e.target.name]: e.target.value,
      },
    })
  }

  handleClick = e => {
    e.preventDefault()

    // Validación de campos
    const { name, lastname, rol, date, time, description } = this.state.cita
    if (
      name === '' ||
      lastname === '' ||
      rol === '' ||
      date === '' ||
      time === '' ||
      description === ''
    ) {
      this.setState({
        error: true,
      })
      return
    }
    // Agregar citas
    const { agregarCitas } = this.props
    const { cita } = this.state
    agregarCitas({ ...cita, id: uuid() })
    // Limpiar formulario
    this.setState(STATE_INICIAL)
  }

  render() {
    const {
      error,
      cita: { name, lastname, rol, date, time, description },
    } = this.state
    return (
      <div className="jumbotron">
        {error && (
          <div className="alert alert-danger" role="alert">
            Complete todo los datos del formulario!!
          </div>
        )}
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                className="form-control"
                name="name"
                onChange={this.handleChange}
                value={name}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="lastname">Apellidos</label>
              <input
                type="text"
                className="form-control"
                name="lastname"
                onChange={this.handleChange}
                value={lastname}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="rol">Especialidad</label>
            <input
              type="text"
              className="form-control"
              name="rol"
              placeholder="Cardiologia"
              onChange={this.handleChange}
              value={rol}
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Fecha</label>
            <input
              type="date"
              className="form-control"
              name="date"
              onChange={this.handleChange}
              value={date}
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="time">Hora</label>
              <input
                type="time"
                className="form-control"
                name="time"
                onChange={this.handleChange}
                value={time}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="description">Sintomas</label>
              <input
                type="text"
                className="form-control"
                name="description"
                onChange={this.handleChange}
                value={description}
              />
            </div>
          </div>
          <button
            onClick={this.handleClick}
            type="submit"
            className="btn btn-primary">
            Guardar
          </button>
        </form>
      </div>
    )
  }
}

export default Formulario
