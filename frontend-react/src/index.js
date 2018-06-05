import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

class ReactApp extends HTMLElement {

  constructor() {
    super();
    console.log('ReactApp constructor');
  }

  connectedCallback() {
    console.log('ReactApp connected');
    this.render();
  }

  render() {
    render(<App/>, this);
  }

}

window.customElements.define('react-app', ReactApp);

registerServiceWorker();
