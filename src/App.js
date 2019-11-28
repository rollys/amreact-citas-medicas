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

  render() {
    return (
      <div className="container">
        <Titulo titulo="Citas Medicas" />
        <Formulario agregarCitas={this.agregarCitas} />
        <ListaCitas {...this.state} />
      </div>
    )
  }
}

export default App
