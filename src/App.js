import Handlebars from 'handlebars';
import * as Pages from './pages';
import './styles/App/App.scss';

import Button from './components/Button/Button.js';
import Input from './components/Input/Input.js';
import BorderlessButton from './components/BorderlessButton/BorderlessButton.js';
import { chatList, currentChat } from './mockData.js';

Handlebars.registerPartial('Button', Button);
Handlebars.registerPartial('Input', Input);
Handlebars.registerPartial('BorderlessButton', BorderlessButton);

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
      template = Handlebars.compile(Pages.errorPage);
      this.appElement.innerHTML = template({
        errorCode: '404',
        errorMessage: 'Не туда попали',
      });
    }
    if (this.state.currentPage === 'internalError') {
      template = Handlebars.compile(Pages.errorPage);
      this.appElement.innerHTML = template({
        errorCode: '500',
        errorMessage: 'Мы уже фиксим',
      });
    }
    if (this.state.currentPage === 'chats') {
      template = Handlebars.compile(Pages.chatsPage);
      this.appElement.innerHTML = template({
        chat: chatList,
        currentChat: currentChat,
      });
    }
    if (this.state.currentPage === 'chatsNoChose') {
      template = Handlebars.compile(Pages.chatsPage);
      this.appElement.innerHTML = template({
        chat: chatList,
      });
    }
    if (this.state.currentPage === 'chatsDeleteAction') {
      template = Handlebars.compile(Pages.chatsPage);
      this.appElement.innerHTML = template({
        chat: chatList,
        currentChat: currentChat,
        actionForm: {
          formName: 'deleteChat',
          formActionTitle: 'Удалить чат?',
          formSubmitText: 'Удалить',
          formSubmitName: 'submitDeleteChat',
        },
      });
    }
    if (this.state.currentPage === 'chatsCreateAction') {
      template = Handlebars.compile(Pages.chatsPage);
      this.appElement.innerHTML = template({
        chat: chatList,
        currentChat: currentChat,
        actionForm: {
          formName: 'createChat',
          formActionTitle: 'Создать чат',
          formSubmitText: 'Добавить',
          formSubmitName: 'submitCreateChat',
          inputPlaceholder: 'Логин',
        },
      });
    }
    if (this.state.currentPage === 'profile') {
      template = Handlebars.compile(Pages.profilePage);
      this.appElement.innerHTML = template({
        profile: {
          image:
            'https://cdn.culture.ru/images/3683f3cb-34bf-5388-a13d-00486f99fd8e',
        },
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
