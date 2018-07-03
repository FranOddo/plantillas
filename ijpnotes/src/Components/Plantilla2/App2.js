import React, { Component } from 'react';
import './App2.css';
import Table from "./Table.js"
class App2 extends Component {

  constructor () {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    window.history.back();
  }

  render() {


    return (
      <div className="App2">
        <header className="App-header">
          <img src="http://ijp.ensena.com.ar/pluginfile.php/1/theme_lambda/logo/1528209877/escudo.jpg" height="100px" width="200px"/>
          <h6>
            <div id="inf">
              <link href="https://fonts.googleapis.com/css?family=Play" rel="stylesheet"/>
              <ul className="corregir2">Nombre: </ul>
              <br/>
              <ul className="corregir2">Curso:</ul>
            </div>
          </h6>
        </header>
        <div>
          <Table />
        </div>
        <button id="home" type="button" onClick={this.handleClick}>Home</button>
    
      </div>
 
    );
  }
}

export default App2;