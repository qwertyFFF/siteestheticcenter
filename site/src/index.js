import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuNavegacao from './componentes/home_navbar';
import Rodape from './componentes/home_footer';

ReactDOM.render(<MenuNavegacao />, document.getElementById('root'));
registerServiceWorker();

ReactDOM.render(<Rodape />, document.getElementById('footer'));
registerServiceWorker();
