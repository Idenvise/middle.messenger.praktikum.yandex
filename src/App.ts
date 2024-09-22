import Handlebars from 'handlebars';

import './styles/App/App.scss';

import Button from './components/Button/Button.js';
import Input from './components/Input/Input.js';
import BorderlessButton from './components/BorderlessButton/BorderlessButton.js';
import { chatList, currentChat } from './mockData.js';
import * as Pages from './pages/index.js';

Handlebars.registerPartial('Button', Button);
Handlebars.registerPartial('Input', Input);
Handlebars.registerPartial('BorderlessButton', BorderlessButton);

let i = 0;
const navArr = [
  'signin',
  'signup',
  'notFound',
  'internalError',
  'chats',
  'chatsNoChose',
  'chatsDeleteAction',
  'chatsCreateAction',
  'profile',
  'profileEdit',
];
const nav = document.querySelector('nav') as HTMLElement;

class App {
  private state: {
    currentPage: string;
  };
  private appElement: HTMLElement;

  constructor() {
    this.state = {
      currentPage:
        window.location.pathname === '/'
          ? 'signin'
          : window.location.pathname.split('/').reverse()[0],
      //...someData
    };
    this.appElement = document.getElementById('app') as HTMLElement;
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
          firstName: 'Иван',
          login: 'ivanivanov',
          email: '123@123.ru',
          lastName: 'Иванов',
          visibleName: 'Lorem',
          phone: '+7 (909) 967 30 30',
        },
        readonly: 'readonly',
      });
    }
    if (this.state.currentPage === 'profileEdit') {
      template = Handlebars.compile(Pages.profilePage);
      this.appElement.innerHTML = template({
        profile: {
          image:
            'https://cdn.culture.ru/images/3683f3cb-34bf-5388-a13d-00486f99fd8e',
          firstName: 'Иван',
          login: 'ivanivanov',
          email: '123@123.ru',
          lastName: 'Иванов',
          visibleName: 'Lorem',
          phone: '+7 (909) 967 30 30',
        },
        readonly: '',
      });
    }
    if (this.state.currentPage === 'profileChangePassword') {
      template = Handlebars.compile(Pages.profilePage);
      this.appElement.innerHTML = template({
        profile: {
          image:
            'https://cdn.culture.ru/images/3683f3cb-34bf-5388-a13d-00486f99fd8e',
          firstName: 'Иван',
          login: 'ivanivanov',
          email: '123@123.ru',
          lastName: 'Иванов',
          visibleName: 'Lorem',
          phone: '+7 (909) 967 30 30',
        },
        changePassword: true,
      });
    }
    if (this.state.currentPage === 'profileChangeAvatar') {
      template = Handlebars.compile(Pages.profilePage);
      this.appElement.innerHTML = template({
        profile: {
          image:
            'https://cdn.culture.ru/images/3683f3cb-34bf-5388-a13d-00486f99fd8e',
          firstName: 'Иван',
          login: 'ivanivanov',
          email: '123@123.ru',
          lastName: 'Иванов',
          visibleName: 'Lorem',
          phone: '+7 (909) 967 30 30',
        },
      });
    }

    this.attachEventListeners();
    if (i < 1) {
      i++;
      this.addNav();
    }
  }

  addNav() {
    navArr.forEach((item) => {
      const button = document.createElement('div');

      button.setAttribute('style', 'fonst-size: 16px; color: white;');
      button.textContent = item;

      button.addEventListener('click', () => {
        this.state.currentPage = item;
        this.render();
      });
      nav.append(button);
    });
  }

  attachEventListeners() {
    if (this.state.currentPage === 'signin') {
      console.log(123);
    }
  }
}

export default App;
