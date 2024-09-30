import './signin.scss';

import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { BorderlessButton } from '../../components/BorderlessButton/BorderlessButton';
import Block from '../../frameworks/Block';
import getFormData from '../../helpers/getFormData';

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
          console.log(
            getFormData(document.querySelector('form') as HTMLFormElement)
          );
        },
      }),
      BorderlessButton: new BorderlessButton({
        borderlessButtonType: 'button',
        borderlessButtonName: 'toSignup',
        borderlessButtonText: 'Нет аккаунта?',
        onClick: () => console.log(1),
      }),
      Input: [
        new Input({
          inputType: 'text',
          inputName: 'login',
          labelText: 'Логин',
        }),
        new Input({
          inputType: 'password',
          inputName: 'password',
          labelText: 'Пароль',
        }),
      ],
    });
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
