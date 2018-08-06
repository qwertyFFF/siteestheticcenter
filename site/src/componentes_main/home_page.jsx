import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Parallax } from 'react-parallax';

const insideStyles = {background: 'white', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'};
const image1 = "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";

export default class Home extends Component {
    render() {
        return (
            <div style={styles}>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="jumbotron">
                    <div>
                        <h1>Quem somos</h1>
                        <p>Lorem ipsum dolor elit imperdiet etiam mauris id laoreet nullam, velit rhoncus erat vel proin justo tempor aliquam accumsan, viverra lacinia torquent ullamcorper euismod nec mattis conubia. praesent curabitur congue faucibus venenatis metus quisque pharetra nisl phasellus, lacus convallis tortor hendrerit aliquam quis cursus elementum est, in tempor odio tincidunt magna metus magna condimentum. platea suspendisse luctus amet egestas lectus feugiat dolor, ornare consectetur faucibus molestie cras volutpat, conubia suspendisse litora dictumst nam vitae. vestibulum facilisis luctus felis inceptos elit amet praesent fames sem lobortis, curabitur eleifend magna elit velit nam odio sollicitudin donec etiam, aenean rhoncus nibh adipiscing curae aenean dictumst torquent cursus. </p>
                    </div>
                </div>
                <Parallax bgImage={image1} strength={500}>
                    <div style={{height: 500}}>
                        <div style={insideStyles}>HTML inside the parallax</div>
                    </div>
                </Parallax>
            </div>
        );
    }
}

//Estilos home_page
const styles = ({

    fontFamily: 'sans-serif',
    textAlign: 'center',

});