import { Page } from '@webformula/pax-core';

export default class Home extends Page {
  get title() {
    return 'Home';
  }

  onClick() {
    alert('clicked');
  }

  template() {
    // return 'hello';
    return 'pages/home/page.html';
  }
};
