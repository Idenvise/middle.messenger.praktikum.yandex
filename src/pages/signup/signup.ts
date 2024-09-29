import './signup.scss';

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
