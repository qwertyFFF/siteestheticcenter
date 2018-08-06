import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import logo from './logo.png';

export default class Rodape extends Component {
    render() {
        return (
            <footer>
                <div className="my-row row-cinza-claro">
                </div>
                <div className="my-row" style={styles.row_cinza_escuro}>
                    <div className="container">
                        <p className="pull-left"><img src={logo} alt="Logo footer" style={{width: 45, height: 45}}/>
                            Esthetic Center &copy; {new Date().getFullYear()} - Todos os direitos reservados</p>
                        <p className="pull-right">Desenvolvido por Alessadro Spiercort</p>
                    </div>
                </div>
            </footer>
        );
    }
}

//Estilos home_footer
const styles = ({

    row_cinza_escuro: {
        
        height: '50px',
        backgroundColor: '#333'
    },
    my_row: {

        width: '100%'
    },
});

