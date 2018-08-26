import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import logo from './logo.png';
import {CircleArrow as ScrollButton} from "react-scroll-up-button";
import {
    Col
} from 'reactstrap';
import {Icon} from 'react-fa';

export default class Rodape extends Component {
    render() {
        return (
            <footer>
                <div className="my-row row-cinza-claro">
                    <Col md="12" align="center">
                        <div style={styles.footer_redes}>
                            <p> Acesse nossas redes sociais e fique por dentro das novidades.</p>
                            <br/>
                            <a href="https://www.facebook.com/EstheticCenterReal/" target="_blank" rel="noopener noreferrer"><i><Icon style={{color: '#d4bdb7'}} name="facebook-official" size="2x"/> </i></a>
                            <a href="https://www.instagram.com/estheticcenterreal/?hl=pt-br@estheticcenterreal" target="_blank" rel="noopener noreferrer"><i><Icon style={{color: '#d4bdb7'}} name="instagram" size="2x"/> </i></a>
                        </div>
                    </Col>
                </div>
                <div className="my-row" style={styles.row_cinza_escuro}>
                    <div className="container">
                        <p className="pull-left"><img src={logo} alt="Logo footer" style={{width: 45, height: 45}}/>
                            Esthetic Center &copy; {new Date().getFullYear()} - Todos os direitos reservados
                        </p>
                        <p className="pull-right">Desenvolvido por Alessadro Spiercort</p>
                    </div>
                </div>
                <ScrollButton scrollStepInPx="50" delayInMs="10.66"/>
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
    footer_redes: {
        padding: '60px',
        color: '#d4bdb7',
    }
});

