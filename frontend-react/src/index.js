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
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render(this.getAttributesObject());
    }

    render(props) {
        render(<App {...props} />, this.shadowRoot);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render(Object.assign(this.getAttributesObject(), { [name]: newValue }));
    }

    getAttributesObject() {
        return Array.from(this.attributes).reduce((acc, el) => {
            acc[el.name] = el.value;
            return acc;
        }, {});
    }


}

window.customElements.define('react-app', ReactApp);

registerServiceWorker();
