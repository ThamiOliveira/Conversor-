import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Conversor from "./componentes/conversor"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Conversor de Moedas</h1>
        <div className="linha">
          <p> <h2 className= "tituloCard"> De Dólar para Real</h2>
            <Conversor moedaA="USD" moedaB="BRL"></Conversor>
          </p>
          <p> <h2 className= "tituloCard"> De Real para Dólar </h2>
            <Conversor moedaA="BRL" moedaB="USD"></Conversor>
          </p>
        </div>
        <div className="linha">
          <p> <h2 className= "tituloCard"> De Dólar Canadense para Real</h2>
            <Conversor moedaA="CAD" moedaB="BRL"></Conversor>
          </p>
          <p> <h2 className= "tituloCard" > De Real para Dólar Canadense </h2>
            <Conversor moedaA="BRL" moedaB="CAD"></Conversor>
          </p>
        </div>
        <div className="linha">
          <p> <h2 className= "tituloCard"> De Euro para Real </h2>
            <Conversor moedaA="EUR" moedaB="BRL"></Conversor>
          </p>
          <p> <h2 className= "tituloCard"> De Real para Euro </h2>
            <Conversor moedaA="BRL" moedaB="EUR"></Conversor>
          </p>
        </div>
      </div>

    );
  }
}

export default App;
