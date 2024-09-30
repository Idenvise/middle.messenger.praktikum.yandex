import './profile.scss';

import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { BorderlessButton } from '../../components/BorderlessButton/BorderlessButton';
import Block from '../../frameworks/Block';

interface FormData {
  email: string;
  login: string;
  first_name: string;
  second_name: string;
  phone: string;
  password: string;
  repeatPassword: string;
}

interface Props {
  [key: string]: any;
}

export class Profile extends Block {
  constructor(props: Props) {
    super(props);
  }

  override render() {
    return `
      <main class='app'>
        <div class='profile__wrapper'>
          <aside class='profile__aside'>
            <img
              class='profile__aside__img'
              src='images/arrow__in__circle.svg'
            />
          </aside>
          <div class='profile'>
            <form class='profile__image__form' name='changeAvatar'>
              <button class='profile__image__wrapper-button'>
                {{#if profile.image}}
                  <div class='profile__image'>
                    <img
                      class='profile__image'
                      src={{profile.image}}
                      alt='Фото профиля'
                    />
                  </div>
                {{else}}
                  <div class='profile__image'>
                    <img
                      class='profile__image__svg'
                      src='images/default__profile__image.svg'
                      alt='Сменить фото'
                    />
                  </div>
                {{/if}}
                <p class='profile__image__hover'>
                  Поменять аватар
                </p>
              </button>
            </form>
            <h1 class='profile__user__name'>{{profile.firstName}}</h1>
            <section class='profile__data'>
              <form class='profile__data__form' name='editProfile'>
                {{#if profile.changePassword}}
                    {{{ Input }}}
                    {{else}}
                    {{{ Input }}}
                {{/if}}
                <div class='profile__buttons'>
                  {{#if profile.readOnly}}
                      {{{ BorderlessButton }}}
                      {{{ BorderlessButton }}}
                      {{{ BorderlessButton }}}
                  {{else}}
                    {{{ Button }}}
                  {{/if}}
                </div>
              </form>
            </section>
          </div>
        </div>
        {{#if changePasswordData}}
          <div class='profile_action-popup action-popup'>
            <form class='profile__action-form action-form'>
              <h1 class='profile__action-form__title'>{{changePasswordData.title}}</h1>
            </form>
          </div>
        {{/if}}
      </main>
          `;
  }
}
