import React from 'react';
import ReactDOM from 'react-dom';
import MenuNavegacao from './componentes_main/home_navbar';
import Rodape from './componentes_main/home_footer';
import Home from './componentes_main/home_page';
import Progressiva from './menu_cabelos/componentes_progressiva/progressiva';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Luzes from './menu_cabelos/componentes_luzes/luzes';


ReactDOM.render(<MenuNavegacao />, document.getElementById('navbar'));

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/progressiva" component={Progressiva} />
            <Route path="/luzes" component={Luzes} />
        </Switch>
    </ BrowserRouter>
    ,document.getElementById('body')
);

ReactDOM.render(<Rodape />, document.getElementById('footer'));

