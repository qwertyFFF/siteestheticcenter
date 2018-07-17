import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Container } from 'reactstrap';

const Rodape = (props) => {
    return (
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">Fluid jumbotron</h1>
            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
          </Container>
        </Jumbotron>
      </div>
    );
  };
  
  export default Rodape;