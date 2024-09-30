import './signup.scss';

import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { BorderlessButton } from '../../components/BorderlessButton/BorderlessButton';
import Block from '../../frameworks/Block';
import getFormData from '../../helpers/getFormData';

export class Signup extends Block {
  constructor() {
    super({
      Button: new Button({
        disabled: false,
        buttonType: 'submit',
        buttonName: 'submitSignin',
        buttonText: 'Зарегистрироваться',
        onClick: (e) => {
          e.preventDefault();
          console.log(
            getFormData(document.querySelector('form') as HTMLFormElement)
          );
        },
      }),
      BorderlessButton: new BorderlessButton({
        borderlessButtonType: 'button',
        borderlessButtonName: 'toSignin',
        borderlessButtonText: 'Войти',
        onClick: () => console.log(1),
      }),
      Input: [
        new Input({
          inputType: 'email',
          inputName: 'email',
          labelText: 'Почта',
        }),
        new Input({
          inputType: 'text',
          inputName: 'login',
          labelText: 'Логин',
        }),
        new Input({
          inputType: 'text',
          inputName: 'first_name',
          labelText: 'Имя',
        }),
        new Input({
          inputType: 'text',
          inputName: 'second_name',
          labelText: 'Фамилия',
        }),
        new Input({
          inputType: 'text',
          inputName: 'phone',
          labelText: 'Телефон',
        }),
        new Input({
          inputType: 'password',
          inputName: 'password',
          labelText: 'Пароль',
        }),
        new Input({
          inputType: 'password',
          inputName: 'repeatPassword',
          labelText: 'Пароль (ещё раз)',
        }),
      ],
    });
  }

  override render() {
    return `
      <main class='app'>
        <form class='auth__form' name='signup'>
          <h1 class='auth__form__header'>Регистрация</h1>
          {{{ Input}}}
          {{{ Button }}}
          {{{ BorderlessButton }}}
        </form>
      </main>
    `;
  }
}
