import './signin.scss';

import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { BorderlessButton } from '../../components/BorderlessButton/BorderlessButton';
import Block from '../../frameworks/Block';

export class Signin extends Block {
  constructor() {
    super({
      Button: new Button({
        disabled: false,
        buttonType: 'submit',
        buttonName: 'submitSignin',
        buttonText: 'Войти',
        onClick: (e) => {
          e.preventDefault();
          console.log(this._getFormData());
        },
      }),
      BorderlessButton: new BorderlessButton({
        type: 'button',
        name: 'toSignup',
        borderlessButtonText: 'Нет аккаунта?',
        onClick: () => console.log(1),
      }),
      Input: [
        new Input({
          inputType: 'text',
          inputName: 'login',
          isReadOnly: false,
          labelText: 'Логин',
        }),
        new Input({
          inputType: 'password',
          inputName: 'password',
          isReadOnly: false,
          labelText: 'Пароль',
        }),
      ],
    });
  }

  private _getFormData(): { name: string; password: string } | '' {
    const name: HTMLInputElement | null =
      document.querySelector('[name="login"]');
    const password: HTMLInputElement | null =
      document.querySelector('[name="password"]');
    return name && password
      ? {
          name: name.value,
          password: password.value,
        }
      : '';
  }

  override render() {
    return `
    <main class='app'>
      <form class='auth__form' name='signin'>
        <h1 class='auth__form__header'>Вход</h1>
        <div class='form__item'>
        {{{ Input }}}
        {{{ Button }}}
        {{{ BorderlessButton }}}
      </form>
    </main>
    `;
  }
}
