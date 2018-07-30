import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import MenuNavegacao from './componentes_main/home_navbar';
import Rodape from './componentes_main/home_footer';
import Home from './componentes_main/home_page';
import Progressiva from './menu_cabelos/componentes_progressiva/progressiva';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Luzes from './menu_cabelos/componentes_luzes/luzes';

ReactDOM.render(<MenuNavegacao />, document.getElementById('navbar'));
registerServiceWorker();

ReactDOM.render(<Home />, document.getElementById('home'));
registerServiceWorker();

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/progressiva" component={Progressiva} />
            <Route path="/luzes" component={Luzes}/>
        </Switch>
    </ BrowserRouter>
    , document.getElementById('body'));
registerServiceWorker();

ReactDOM.render(<Rodape />, document.getElementById('footer'));
registerServiceWorker(); 

