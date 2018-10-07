import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FotoReact from './imagens/react.jpeg';
import Skull from './imagens/skull_punisher.jpg';
import Gallery from 'react-photo-gallery';

const PHOTO_SET = [
  {
    src: FotoReact,
    width: '5px',
    height: '5px'
  },
  {
    src: Skull,
    width: '1px',
    height: '1px'
  }
];

class Progressiva extends Component {
  onClick(){

  }
  render() {
    return (
      <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <Gallery photos={PHOTO_SET} />
      </div>
    );
  }
}

export default Progressiva;
