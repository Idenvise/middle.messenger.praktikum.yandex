import Handlebars from 'handlebars';
import * as Pages from './pages';
import './styles/App/App.scss';

import Button from './components/Button/Button.js';
import Input from './components/Input/Input.js';
import BorderlessButton from './components/BorderlessButton/BorderlessButton.js';
import Label from './components/Label/Label.js';

Handlebars.registerPartial('Button', Button);
Handlebars.registerPartial('Input', Input);
Handlebars.registerPartial('BorderlessButton', BorderlessButton);
Handlebars.registerPartial('Label', Label);

export default class App {
  constructor() {
    this.state = {
      currentPage:
        window.location.pathname === '/'
          ? 'signin'
          : window.location.pathname.split('/').reverse()[0],
      ///...someData
    };
    this.appElement = document.getElementById('app');
  }

  render() {
    let template;
    if (this.state.currentPage === 'signin') {
      template = Handlebars.compile(Pages.signinPage);
      this.appElement.innerHTML = template();
    }
    if (this.state.currentPage === 'signup') {
      template = Handlebars.compile(Pages.signupPage);
      this.appElement.innerHTML = template();
    }
    if (this.state.currentPage === 'notFound') {
      template = Handlebars.compile(Pages.notFoundPage);
      this.appElement.innerHTML = template();
    }
    if (this.state.currentPage === 'internalError') {
      template = Handlebars.compile(Pages.internalErrorPage);
      this.appElement.innerHTML = template();
    }
    if (this.state.currentPage === 'chats') {
      template = Handlebars.compile(Pages.chatsPage);
      this.appElement.innerHTML = template();
    }
    this.attachEventListeners();
  }

  attachEventListeners() {
    if (this.state.currentPage === 'signin') {
      console.log(123);
    }
  }
}
