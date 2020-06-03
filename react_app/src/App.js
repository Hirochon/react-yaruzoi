import React, {Component} from 'react';
// import Rect from './Rect';
import './App.css';

class App extends Component {
    data = [];

    msgStyle = {
        fontSize: "20pt",
        color:"#900",
        margin:"20px 0px",
        padding:"5px",
    }
    area = {
        width: "500px",
        height: "500px",
        border: "1px solid blue"
    }

    constructor(props){
        super(props);
        this.state = {
            list:this.data
        };
        this.doAction = this.doAction.bind(this);
    }

    doAction(e){
        let x = e.pageX;
        let y = e.pageY;
        this.data.push({x:x, y:y});
        this.setState({
            list:this.data
        });
    }

    draw(d){
        let s = {
            position: "absolute",
            left:(d.x - 40) + "px",
            top: (d.y - 15) + "px",
            width: "80px",
            height: "30px",
            textAlign: "center",
            backgroundColor: "#0005",
            color: "#9df"
        };
        return <div style={s}>だーこの</div>;
    }

    render(){
        return (
            <div>
                <h1>React</h1>
                <h2 style={this.msgStyle}>show rect.</h2>
                <div style={this.area} onClick={this.doAction}>
                    {this.data.map((value)=>this.draw(value))}
                </div>
            </div>
        );
    }
}

export default App;
