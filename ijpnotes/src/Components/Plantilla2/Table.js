import React, { Component } from 'react';

class Table extends Component {

  render() {

    return (
        <body>
        <table id="tabla" border="1">
        <link href="https://fonts.googleapis.com/css?family=Play" rel="stylesheet"/>
          <tr>
            <th className="head">Materia</th>
            <th className="head">Notas1T</th>
            <th className="head">Promedio1T</th>
            <th className="head">Notas2T</th>
            <th className="head">Promedio2T</th>
            <th className="head">Notas3T</th>
            <th className="head">Promedio3T</th>
          </tr>
          <tr>
            <td>Ejemplo</td>
            <td>
              <td id="nt1">4</td>
              <td id="nt2">8</td>
              <td id="nt3">6</td>
            </td>
            <td id="prom1"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </body>
 
    );
  }
}

export default Table;
