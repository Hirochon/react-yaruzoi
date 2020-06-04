import React, {Component} from 'react';
// import Rect from './Rect';
import './App.css';

let thema = {
    light: {
        backgroundColor: "#eef",
        color: "#006",
        padding: "10px"
    },
    dark: {
        backgroundColor: "#006",
        color: "#eef",
        padding: "10px"
    }
};

const ThemaContext = React.createContext(thema.dark);

class App extends Component {
    static contextType = ThemaContext;

    render() {
        return (
            <div style={this.context}>
                <h1>Context</h1>
                <Title value="Contet Page" />
                <Message value="This is Content sample." />
                <Message value="※これはThemaのサンプルです。" />
            </div>
        );
    }
}

class Title extends Component {
    static contextType = ThemaContext;

    render() {
        return (
            <div>
                <h2 style={this.context}>{this.props.value}</h2>
            </div>
        );
    }
}

class Message extends Component {
    static contextType = ThemaContext;

    render(){
        return (
            <div>
                <p style={this.context} >{this.props.value}</p>
            </div>
        )
    }
}

export default App;
