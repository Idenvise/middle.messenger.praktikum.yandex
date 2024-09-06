import Handlebars from 'handlebars';
import * as Pages from './pages';
import './styles/App/App.scss';
import { randomText } from './mockData.js';

import Button from './components/Button/Button.js';
import Input from './components/Input/Input.js';

Handlebars.registerPartial('Button', Button);
Handlebars.registerPartial('Input', Input);

export default class App {
  constructor() {
    this.state = {
      currentPage: 'signin',
      ///...someData
    };
    this.appElement = document.getElementById('app');
  }

  render() {
    let template;
    if (this.state.currentPage === 'signin') {
      template = Handlebars.compile(Pages.authPage);
      this.appElement.innerHTML = template({
        text: randomText[0],
        placeholder: randomText[1],
        authFormHeader: 'Вход',
      });
    }
    this.attachEventListeners();
  }

  attachEventListeners() {
    if (this.state.currentPage === 'signin') {
      console.log(123);
    }
  }
}
