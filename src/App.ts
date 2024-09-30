import Handlebars from 'handlebars';

import './styles/App/App.scss';

import { BorderlessButton } from './components/BorderlessButton/BorderlessButton.ts';
import {
  chatList,
  chats,
  currentChat,
  internalErrorProps,
  notFoundErrorProps,
  profileEditProps,
  profileProps,
} from './mockData.js';
import * as Pages from './pages/index.js';
import { Signin } from './pages/signin/signin.ts';
import { Input } from './components/Input/Input.ts';
import { Button } from './components/Button/Button.ts';
import getFormData from './helpers/getFormData.ts';

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
          ? 'chats'
          : window.location.pathname.split('/').reverse()[0],
      //...someData
    };
    this.appElement = document.getElementById('app') as HTMLElement;
  }

  render() {
    let template;
    if (this.state.currentPage === 'signin') {
      const signinPage = new Signin();
      console.log(signinPage.getContent());
      if (this.appElement) {
        this.appElement.replaceWith(signinPage.getContent());
      }
    }
    if (this.state.currentPage === 'signup') {
      const signupPage = new Pages.Signup();
      console.log(signupPage.getContent());
      if (this.appElement) {
        this.appElement.replaceWith(signupPage.getContent());
      }
    }
    if (this.state.currentPage === 'notFoundError') {
      const errorPage = new Pages.Error(notFoundErrorProps);
      console.log(errorPage.getContent());
      if (this.appElement) {
        this.appElement.replaceWith(errorPage.getContent());
      }
    }
    if (this.state.currentPage === 'internalError') {
      const errorPage = new Pages.Error(internalErrorProps);
      console.log(errorPage.getContent());
      if (this.appElement) {
        this.appElement.replaceWith(errorPage.getContent());
      }
    }
    if (this.state.currentPage === 'chats') {
      const chatsPage = new Pages.Chats(chats);
      console.log(chatsPage.getContent());
      if (this.appElement) {
        this.appElement.replaceWith(chatsPage.getContent());
      }
    }
    //if (this.state.currentPage === 'chatsNoChose') {
    //  template = Handlebars.compile(Pages.chatsPage);
    //  this.appElement.innerHTML = template({
    //    chat: chatList,
    //  });
    //}
    //if (this.state.currentPage === 'chatsDeleteAction') {
    //  template = Handlebars.compile(Pages.chatsPage);
    //  this.appElement.innerHTML = template({
    //    chat: chatList,
    //    currentChat: currentChat,
    //    actionForm: {
    //      formName: 'deleteChat',
    //      formActionTitle: 'Удалить чат?',
    //      formSubmitText: 'Удалить',
    //      formSubmitName: 'submitDeleteChat',
    //    },
    //  });
    //}
    //if (this.state.currentPage === 'chatsCreateAction') {
    //  template = Handlebars.compile(Pages.chatsPage);
    //  this.appElement.innerHTML = template({
    //    chat: chatList,
    //    currentChat: currentChat,
    //    actionForm: {
    //      formName: 'createChat',
    //      formActionTitle: 'Создать чат',
    //      formSubmitText: 'Добавить',
    //      formSubmitName: 'submitCreateChat',
    //      inputPlaceholder: 'Логин',
    //    },
    //  });
    //}
    if (this.state.currentPage === 'profile') {
      const profilePage = new Pages.Profile(profileProps);
      console.log(profilePage.getContent());
      if (this.appElement) {
        this.appElement.replaceWith(profilePage.getContent());
      }
    }
    if (this.state.currentPage === 'profileEdit') {
      const profilePage = new Pages.Profile(profileEditProps);
      console.log(profilePage.getContent());
      if (this.appElement) {
        this.appElement.replaceWith(profilePage.getContent());
      }
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
      return;
    }
  }
}

export default App;
