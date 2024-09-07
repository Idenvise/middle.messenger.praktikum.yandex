import Handlebars from 'handlebars';
import * as Pages from './pages';
import './styles/App/App.scss';
import { randomText } from './mockData.js';

import Button from './components/Button/Button.js';
import Input from './components/Input/Input.js';
import BorderlessButton from './components/BorderlessButton/BorderlessButton.js';

Handlebars.registerPartial('Button', Button);
Handlebars.registerPartial('Input', Input);
Handlebars.registerPartial('BorderlessButton', BorderlessButton);

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
      template = Handlebars.compile(Pages.signinPage);
      this.appElement.innerHTML = template({
        buttonText: 'Авторизоваться',
        placeholder: 'Логин',
        signinHeader: 'Вход',
        borderlessButtonText: 'Нет аккаунта?',
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
