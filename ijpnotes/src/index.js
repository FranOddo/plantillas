import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import App2 from "./Components/Plantilla2/App2";
import registerServiceWorker from './registerServiceWorker';
import { Route , BrowserRouter } from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
        <React.Fragment>
            <Route exact path="/" component={App}/>
            <Route path="/Plantilla2" component={App2}/>
        </React.Fragment>
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker(); 

