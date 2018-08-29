import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Parallax } from 'react-parallax';
import GoogleMapReact from 'google-map-react';
import Salao from './salao_imagem_1.jpeg';

const image1 = Salao;
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class Home extends Component {
    static defaultProps = {
        center: {
          lat: -30.086595,
          lng: -51.222959
        },
        zoom: 20
    };

    render() {
        return (
            <div>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="jumbotron">
                    <div style={styles.quem_somos}>
                        <h1>Quem somos!!!</h1>
                        <p>Lorem ipsum dolor elit imperdiet etiam mauris id laoreet nullam, velit rhoncus erat vel proin justo tempor aliquam accumsan, viverra lacinia torquent ullamcorper euismod nec mattis conubia. praesent curabitur congue faucibus venenatis metus quisque pharetra nisl phasellus, lacus convallis tortor hendrerit aliquam quis cursus elementum est, in tempor odio tincidunt magna metus magna condimentum. platea suspendisse luctus amet egestas lectus feugiat dolor, ornare consectetur faucibus molestie cras volutpat, conubia suspendisse litora dictumst nam vitae. vestibulum facilisis luctus felis inceptos elit amet praesent fames sem lobortis, curabitur eleifend magna elit velit nam odio sollicitudin donec etiam, aenean rhoncus nibh adipiscing curae aenean dictumst torquent cursus. </p>
                    </div>
                </div>
                <Parallax bgImage={image1} strength={500}>
                    <div style={{height: 500}}>
                        <h1 style={styles.insideParallax}>Um novo conceito em beleza</h1>
                    </div>
                </Parallax>
                <br/>
                {/*Google Maps API*/}
                <div className="container">
                    <h2>Como nos encontrar!</h2>
                    <div style={styles.mapstyle}>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: 'AIzaSyCOmI3kxB9Ua0meiiQy4QB2rDrlRc2GKG8' }}
                            defaultCenter={this.props.center}
                            defaultZoom={this.props.zoom}
                            >
                            <AnyReactComponent
                                lat={-30.086595}
                                lng={-51.222959}
                                text={'Esthetic Center'}
                            />
                        </GoogleMapReact>
                    </div>
                </div>
                <br/>
            </div>
        );
    }
}

const styles = ({
    quem_somos: {
        fontFamily: 'Roboto',
        textAlign: 'center',
        color: '#646464'
    },
    insideParallax: {
        backgroundColor: 'rgba(212, 189, 183, 0.6)',
        //Determinar fonte da frase no Parallax
        fontFamily: '',
        padding: 20, 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%,-50%)'
    },
    mapstyle: {
        height: '70vh', 
        width: '100%', 
        borderRadius: '5px', 
        border: '2px solid'
    }
});