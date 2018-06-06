import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    textEntered(element) {
        const text = element.value;
        const event = new CustomEvent('textEntered', {
            bubbles: true,
            detail: {
                text
            }
        });

        element.dispatchEvent(event);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <input type="text" placeholder="tue da öpis dri" onKeyUp={event => this.textEntered(event.target)}/>
            </div>
        );
    }
}

export default App;
