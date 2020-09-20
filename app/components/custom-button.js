import { HTMLElementExtended } from '@webformula/pax-core';

customElements.define('custom-button', class extends HTMLElementExtended {
  constructor() {
    super();

    this.bound_onClick = this.onclick.bind(this);
    this.cloneTemplate();
  }

  get buttonElement() {
    return this.querySelector('button');
  }

  connectedCallback() {
    this.buttonElement.addEventListener('click', this.bound_onClick);
  }

  disconnectedCallback() {
    this.buttonElement.removeEventListener('click', this.bound_onClick);
  }

  onclick() {
    console.log('component clicked');
  }

  template() {
    return /*html*/`
      <button>
        <slot></slot>
      </button>
    `;
  }
});
