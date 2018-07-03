import React, { Component } from 'react';
import './App.css';
import Escudo from "./Escudo.js"
import Sign from "./Sign.js"


class App extends Component {
  componentDidMount(){
    var search=document.getElementById("search").addEventListener("click", function(){
      window.location.href=("/Plantilla2/App2.js");
    })
  }

  render() {
    // Logo
    return (
      <body>
          <div className="App">
            <header>
              <Escudo />
            </header>
          <div className="App-intro">
            <div id="barra">
              <link href="https://fonts.googleapis.com/css?family=Nova+Square|Share+Tech+Mono" rel="stylesheet"/>  
              <h1 className="App-title">IJP NOTES</h1>
            </div>
          </div>
          </div>
          <div id="sign">
            <h3 id="consigna">Enter your DNI and see your notes and attendances!</h3>
            <Sign />
          </div>
          <div id="dp">
            <h2 color="white" >DEVELOPERS</h2>
          </div>
          <h4 className="nombres">
            <li>Benjamin Leymon</li>
            <li id="dos">Francisco Oddo</li>
            <li id="tres">Martin Funes </li>
            <li id="cuatro">Franco Pacheco</li></h4>
          <h5 className="nombres">2018 6B Globant S.C</h5>
      </body>
    );
  }
}

export default App;
