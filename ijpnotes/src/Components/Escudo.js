import React, { Component } from 'react';
class Escudo extends Component {
    render() {
        return (
            <div>
                <img id="logo" src={require("./escudo.jpg")} alt=""/>
                <path fill="currentColor" d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
            </div>
        );
    }
}

export default Escudo;