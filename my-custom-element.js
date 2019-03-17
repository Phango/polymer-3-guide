import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class myCustomElement extends PolymerElement {
  static get template() {
    return html`
      <div on-click="greetMe">Click me!</div>
    `
  }
  static get properties() {
    return {
      greeting: {
        type: String
      }
    }
  }
  constructor() {
    super();
    this.greeting = 'Hello, world!';
  }
  greetMe() {
    console.log(this.greeting);
  }

}

customElements.define('my-custom-element', myCustomElement);