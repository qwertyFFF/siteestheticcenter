import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import {Jumbotron, Container} from 'reactstrap';

export default class Apresentacao extends Component {
    render() {
        return(
            <div>
                <Jumbotron fluid>
                    <Container fluid>
                        <h1 className="display-3">Fluid jumbotron</h1>
                        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}