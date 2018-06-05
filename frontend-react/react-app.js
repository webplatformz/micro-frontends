import React from 'react';
import {render} from 'react-dom';
import App from './src/App';

window.customElements.define('react-app', class extends HTMLElement {

    constructor() {
        super();
        console.log('ReactApp constructor');
    }

    connectedCallback() {
        console.log('ReactApp connected');

        this.render();
    }

    render() {
        render(<App/>);
    }

});