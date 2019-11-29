import React, { Component } from 'react'
import Titulo from './components/titulo'
import Formulario from './components/formulario'
import ListaCitas from './components/lista-citas'

class App extends Component {
  constructor() {
    super()
    this.state = {
      listaCitas: [],
    }
  }

  agregarCitas = cita => {
    this.setState({
      listaCitas: [...this.state.listaCitas, cita],
    })
  }

  eliminarCita = id => {
    const { listaCitas } = this.state
    const nuevaLista = listaCitas.filter(item => {
      return item.id !== id
    })
    //Actualizar la lista de citas
    this.setState({
      listaCitas: nuevaLista,
    })
  }

  componentWillMount() {
    const obtenerCitas = localStorage.getItem('listaCitas')
    this.setState({
      listaCitas: JSON.parse(obtenerCitas),
    })
  }

  componentDidUpdate() {
    localStorage.setItem('listaCitas', JSON.stringify(this.state.listaCitas))
  }

  render() {
    return (
      <div className="container">
        <Titulo titulo="Citas Medicas" />
        <Formulario agregarCitas={this.agregarCitas} />
        <ListaCitas {...this.state} eliminarCita={this.eliminarCita} />
      </div>
    )
  }
}

export default App
