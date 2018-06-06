import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

class ReactApp extends HTMLElement {

    static get observedAttributes() {
        return ['toggle'];
    }

    constructor() {
        super();
        console.log('ReactApp constructor');
    }

    connectedCallback() {
        console.log('ReactApp connected');
        this.render();
    }

    render(props) {
        render(<App {...props} />, this);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render({ [name]: newValue });
    }


}

window.customElements.define('react-app', ReactApp);

registerServiceWorker();
