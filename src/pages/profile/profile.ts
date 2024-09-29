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
    super({
      Button: new Button({
        disabled: false,
        buttonType: 'submit',
        buttonName: 'submitSignin',
        buttonText: 'Зарегистрироваться',
        onClick: (e) => {
          e.preventDefault();
          console.log(this._getFormData());
        },
      }),
      BorderlessButton: new BorderlessButton({
        type: 'button',
        name: 'toSignin',
        borderlessButtonText: 'Войти',
        onClick: () => console.log(1),
      }),
      Input: [
        new Input({
          inputType: 'email',
          inputName: 'email',
          isReadOnly: false,
          labelText: 'Почта',
        }),
        new Input({
          inputType: 'text',
          inputName: 'login',
          isReadOnly: false,
          labelText: 'Логин',
        }),
        new Input({
          inputType: 'text',
          inputName: 'first_name',
          isReadOnly: false,
          labelText: 'Имя',
        }),
        new Input({
          inputType: 'text',
          inputName: 'second_name',
          isReadOnly: false,
          labelText: 'Фамилия',
        }),
        new Input({
          inputType: 'text',
          inputName: 'phone',
          isReadOnly: false,
          labelText: 'Телефон',
        }),
        new Input({
          inputType: 'password',
          inputName: 'password',
          isReadOnly: false,
          labelText: 'Пароль',
        }),
        new Input({
          inputType: 'password',
          inputName: 'repeatPassword',
          isReadOnly: false,
          labelText: 'Пароль (ещё раз)',
        }),
      ],
    });
  }

  static profile = {
    image: '1o23kn',
  };

  private _getFormData(): FormData | '' {
    const formInputs = document
      .querySelector('form')
      ?.querySelectorAll('input');
    const formData = {};
    formInputs?.forEach((input) => {
      formData[input.name as keyof FormData] = input.value;
    });
    return Object.keys(formData).length !== 0 ? (formData as FormData) : '';
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

      </main>
          `;
  }
}

//         <div class='profile'>
//           <form class='profile__image__form' name='changeAvatar'>
//             <button class='profile__image__wrapper-button'>
//               {{#if profile.image}}
//                 <div class='profile__image'>
//                   <img
//                     class='profile__image'
//                     src={{profile.image}}
//                     alt='Фото профиля'
//                   />
//                 </div>
//               {{else}}
//                 <div class='profile__image'>
//                   <img
//                     class='profile__image__svg'
//                     src='images/default__profile__image.svg'
//                     alt='Сменить фото'
//                   />
//                 </div>
//               {{/if}}
//               <p class='profile__image__hover'>
//                 Поменять аватар
//               </p>
//             </button>
//           </form>
//           <h1 class='profile__user__name'>{{profile.firstName}}</h1>
//           <section class='profile__data'>
//             <form class='profile__data__form' name='editProfile'>
//               {{#if changePassword}}
//                   {{{Input inputType='password' labelText='Старый пароль' inputName='oldPassword' textAlign='input__profile' isReadOnly=readonly}}}
//                   {{{Input inputType='password' labelText='Новый пароль' inputName='newPassword' textAlign='input__profile' isReadOnly=readonly}}}
//                   {{{Input inputType='password' labelText='Повторите новый пароль' inputName='repeatNewPassword' textAlign='input__profile' isReadOnly=readonly}}}
//                   {{else}}
//                   {{{Input inputType='email' labelText='Почта' inputName='email' textAlign='input__profile' inputValue=profile.email isReadOnly=readonly}}}
//                   {{{Input inputType='text' labelText='Логин' inputName='login' textAlign='input__profile' inputValue=profile.login isReadOnly=readonly}}}
//                   {{{Input inputType='text' labelText='Имя' inputName='first_name' textAlign='input__profile' inputValue=profile.firstName isReadOnly=readonly}}}
//                   {{{Input inputType='text' labelText='Фамилия' inputName='second_name' textAlign='input__profile' inputValue=profile.lastName isReadOnly=readonly}}}
//                   {{{Input inputType='text' labelText='Имя в чате' inputName='display_name' textAlign='input__profile' inputValue=profile.visibleName isReadOnly=readonly}}}
//                   {{{Input inputType='tel' labelText='Телефон' inputName='phone' textAlign='input__profile' inputValue=profile.phone isReadOnly=readonly}}}
//                 {{/if}}
//                   <div class='profile__buttons'>
//                     {{#if readonly}}
//                         {{{BorderlessButton borderlessButtonName='editProfile' borderlessButtonText='Изменить данные' borderlessButtonType='button'}}}
//                         {{{BorderlessButton borderlessButtonName='editPassword' borderlessButtonText='Изменить профиль' borderlessButtonType='button'}}}
//                         {{{BorderlessButton borderlessButtonName='exitProfile' borderlessButtonText='Выйти' addClass='red__color' borderlessButtonType='button'}}}
//                     {{else}}
//                       {{{Button buttonText='Сохранить' borderlessButtonType='submit'}}}
//                     {{/if}}
//                   </div>
//
//
//             </form>
//           </section>
//         </div>
//       </div>
//       {{#if changePasswordData}}
//         <div class='profile_action-popup action-popup'>
//           <form class='profile__action-form action-form'>
//             <h1 class='profile__action-form__title'>{{changePasswordData.title}}</h1>
//           </form>
//         </div>
//       {{/if}}
