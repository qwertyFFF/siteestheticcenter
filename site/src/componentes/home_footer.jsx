import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
  
export default class Rodape extends Component {
    render() {
        return (
            <footer className="fixed-bottom">
                <div className="my-row row-cinza-claro">

                </div>
                <div className="my-row row-cinza-escuro">
                    <div className="container">
                        {/*Verificar ano ser incrementado uma vez por ano*/}
                        <p className="pull-left">Esthetic Center &copy; 2018 -  Todos os direitos reservados</p>
                        <p className="pull-right">Desenvolvido por Alessadro Spiercort</p>
                    </div>
                </div>
            </footer>
        );
    }
}

