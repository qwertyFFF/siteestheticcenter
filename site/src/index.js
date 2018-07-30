import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import MenuNavegacao from './componentes_main/home_navbar';
import Rodape from './componentes_main/home_footer';
import Progressiva from './menu_cabelos/componentes_progressiva/progressiva';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(<MenuNavegacao />, document.getElementById('root'));
registerServiceWorker();

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/progressiva" component={Progressiva} />
        </Switch>
    </ BrowserRouter>
    , document.getElementById('prog'));
registerServiceWorker();

ReactDOM.render(<Rodape />, document.getElementById('footer'));
registerServiceWorker(); 

