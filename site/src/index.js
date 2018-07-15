import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuNavegacao from './componentes/home_navbar';

ReactDOM.render(<MenuNavegacao />, document.getElementById('root'));
registerServiceWorker();
