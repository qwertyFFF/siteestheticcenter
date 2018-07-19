import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import MenuNavegacao from './componentes_home/home_navbar';
import Rodape from './componentes_home/home_footer';
import Apresentacao from './componentes_home/home_apresentacao';

ReactDOM.render(<MenuNavegacao />, document.getElementById('root'));
registerServiceWorker();

ReactDOM.render(<Rodape />, document.getElementById('footer'));
registerServiceWorker();

ReactDOM.render(<Apresentacao />, document.getElementById('apres'));
registerServiceWorker();
