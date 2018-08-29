import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FotoReact from './imagens/react.jpeg';

const imageReact = FotoReact;
class Progressiva extends Component {
    render() {
        return (
            <div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div class="row">
                    <div class="third">
                        <img src={imageReact} style={{width:'60%'}} onclick="onClick(this)" alt="A boy surrounded by beautiful nature"></img>
                        <img src="/w3images/girl_mountain.jpg" style={{width:'100%'}} onclick="onClick(this)" alt="What a beautiful scenery this sunset"></img>
                        <img src="/w3images/girl.jpg" style={{width:'100%'}} onclick="onClick(this)" alt="The Beach. Me. Alone. Beautiful"></img>
                    </div>

                    <div class="third">
                        <img src="/w3images/boy.jpg" style={{width:'100%'}} onclick="onClick(this)" alt="Quiet day at the beach. Cold, but beautiful"></img>
                        <img src="/w3images/man_bench.jpg" style={{width:'100%'}} onclick="onClick(this)" alt="Waiting for the bus in the desert"></img>
                        <img src="/w3images/natureboy.jpg" style={{width:'100%'}} onclick="onClick(this)" alt="Nature again.. At its finest!"></img>
                    </div>

                    <div class="third">
                        <img src="/w3images/girl.jpg" style={{width:'100%'}} onclick="onClick(this)" alt="Canoeing again"></img>
                        <img src="/w3images/girl_train.jpg" style={{width:'100%'}} onclick="onClick(this)" alt="A girl, and a train passing"></img>
                        <img src="/w3images/closegirl.jpg" style={{width:'100%'}} onclick="onClick(this)" alt="What a beautiful day!"></img>
                    </div>
                </div>
            </div>
        );
    }
}

export default Progressiva;