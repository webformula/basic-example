import { Page } from '@webformula/pax-core';

export default class Second extends Page {
  get title() {
    return 'Another';
  }

  static get routes() {
    return [
      'another',
      'other'
    ];
  }

  template() {
    return /*html*/`
      <div>Second</div>
      <a href="/">Home page</a>

    `;
  }
};
