import { BorderlessButton } from './components/BorderlessButton/BorderlessButton';
import { Button } from './components/Button/Button';
import { ChatElement } from './components/ChatElement/ChatElement';
import { Input } from './components/Input/Input';
import getFormData from './helpers/getFormData';

export const chatList = [
  {
    image:
      'https://avatars.mds.yandex.net/i?id=f0632e75c5cfe7c215eac871fc886532_l-5216269-images-thumbs&n=13',
    name: 'Peter',
    date: '10:26',
    unreadMessage: '2',
    lastMessage: 'Вы: Lorem Ipsum',
  },
  {
    image:
      'https://avatars.mds.yandex.net/i?id=40d5bc3c70f16038f53abcf05b274592_l-4120498-images-thumbs&n=13',
    name: 'Дмитрий',
    date: '20:24',
  },
  {
    image:
      'https://avatars.mds.yandex.net/i?id=f0632e75c5cfe7c215eac871fc886532_l-5216269-images-thumbs&n=13',
    name: 'Peter',
    date: '10:26',
    unreadMessage: '2',
    lastMessage: 'Вы: Lorem Ipsum',
  },
];

export const currentChat = {
  text: 'Здесь будут сообщения',
  photo:
    'https://avatars.mds.yandex.net/i?id=3bdd670ecaab22492e468e9d482769ba_l-5268893-images-thumbs&n=13',
};

export const profileView = {
  image:
    'https://avatars.mds.yandex.net/i?id=40d5bc3c70f16038f53abcf05b274592_l-4120498-images-thumbs&n=13',
  firstName: 'Иван',
  email: 'example@example.ru',
  login: 'ivanivanov',
  lastName: 'Ivanov',
  displayName: 'Iva',
  phone: '+799999999',
  changePassword: false,
  readOnly: true,
};

export const profileProps = {
  Input: [
    new Input({
      inputType: 'email',
      inputName: 'email',
      labelText: 'Почта',
      textAlign: 'input__profile',
      isReadOnly: 'readonly',
      inputValue: profileView.firstName,
    }),
    new Input({
      inputType: 'text',
      inputName: 'login',
      textAlign: 'input__profile',
      isReadOnly: 'readonly',
      labelText: 'Логин',
      inputValue: profileView.login,
    }),
    new Input({
      inputType: 'text',
      inputName: 'first_name',
      textAlign: 'input__profile',
      isReadOnly: 'readonly',
      labelText: 'Имя',
      inputValue: profileView.firstName,
    }),
    new Input({
      inputType: 'text',
      inputName: 'second_name',
      textAlign: 'input__profile',
      isReadOnly: 'readonly',
      labelText: 'Фамилия',
      inputValue: profileView.lastName,
    }),
    new Input({
      inputType: 'text',
      inputName: 'display_name',
      textAlign: 'input__profile',
      isReadOnly: 'readonly',
      labelText: 'Имя в чате',
      inputValue: profileView.displayName,
    }),
    new Input({
      inputType: 'tel',
      inputName: 'phone',
      textAlign: 'input__profile',
      isReadOnly: 'readonly',
      labelText: 'Телефон',
      inputValue: profileView.phone,
    }),
  ],
  BorderlessButton: [
    new BorderlessButton({
      borderlessButtonType: 'button',
      borderlessButtonName: 'editProfile',
      borderlessButtonText: 'Изменить данные',
      onClick: () => console.log(1),
    }),
    new BorderlessButton({
      borderlessButtonType: 'button',
      borderlessButtonName: 'editPassword',
      borderlessButtonText: 'Сменить пароль',
      onClick: () => console.log(1),
    }),
    new BorderlessButton({
      borderlessButtonType: 'button',
      borderlessButtonName: 'exitProfile',
      borderlessButtonText: 'Выйти',
      addClass: 'red__color',
      onClick: () => console.log(1),
    }),
  ],
  profile: profileView,
};

export const profileEditProps = {
  Input: [
    new Input({
      inputType: 'email',
      inputName: 'email',
      labelText: 'Почта',
      textAlign: 'input__profile',
      isReadOnly: '',
      inputValue: profileView.email,
    }),
    new Input({
      inputType: 'text',
      inputName: 'login',
      textAlign: 'input__profile',
      isReadOnly: '',
      labelText: 'Логин',
      inputValue: profileView.login,
    }),
    new Input({
      inputType: 'text',
      inputName: 'first_name',
      textAlign: 'input__profile',
      isReadOnly: '',
      labelText: 'Имя',
      inputValue: profileView.firstName,
    }),
    new Input({
      inputType: 'text',
      inputName: 'second_name',
      textAlign: 'input__profile',
      isReadOnly: '',
      labelText: 'Фамилия',
      inputValue: profileView.lastName,
    }),
    new Input({
      inputType: 'text',
      inputName: 'display_name',
      textAlign: 'input__profile',
      isReadOnly: '',
      labelText: 'Имя в чате',
      inputValue: profileView.displayName,
    }),
    new Input({
      inputType: 'tel',
      inputName: 'phone',
      textAlign: 'input__profile',
      isReadOnly: '',
      labelText: 'Телефон',
      inputValue: profileView.phone,
    }),
  ],
  BorderlessButton: [
    new Button({
      buttonType: 'submit',
      buttonName: 'submitProfile',
      buttonText: 'Сохранить',
      onClick: (e) => {
        e.preventDefault();
        console.log(
          getFormData(
            document.querySelector('[name="editProfile"]') as HTMLFormElement
          )
        );
      },
    }),
  ],
  profile: { ...profileView, readOnly: true },
};

export const internalErrorProps = {
  errorCode: 500,
  errorMessage: 'Мы уже фиксим',
  BorderlessButton: new BorderlessButton({
    borderlessButtonType: 'button',
    borderlessButtonName: 'historyBack',
    borderlessButtonText: 'Назад',
    onClick: () => console.log(1),
  }),
};
export const notFoundErrorProps = {
  errorCode: 404,
  errorMessage: 'Не туда попали',
  BorderlessButton: new BorderlessButton({
    borderlessButtonType: 'button',
    borderlessButtonName: 'historyBack',
    borderlessButtonText: 'Назад',
    onClick: () => console.log(1),
  }),
};

export const chats = {
  ChatElement: [
    new ChatElement({
      image:
        'https://avatars.mds.yandex.net/i?id=f0632e75c5cfe7c215eac871fc886532_l-5216269-images-thumbs&n=13',
      name: 'Alex',
      lastMessage: 'Lorem Ipsum',
      date: '22.02.2022',
      unreadMessage: 0,
      onClick: () => console.log('chatClick'),
    }),
    new ChatElement({
      image:
        'https://avatars.mds.yandex.net/i?id=f0632e75c5cfe7c215eac871fc886532_l-5216269-images-thumbs&n=13',
      name: 'Alex',
      lastMessage: 'Lorem Ipsum',
      date: '22.02.2022',
      unreadMessage: 0,
      onClick: () => console.log('chatClick'),
    }),
    new ChatElement({
      image:
        'https://avatars.mds.yandex.net/i?id=f0632e75c5cfe7c215eac871fc886532_l-5216269-images-thumbs&n=13',
      name: 'Alex',
      lastMessage: 'Lorem Ipsum',
      date: '22.02.2022',
      unreadMessage: 12,
      onClick: () => console.log('chatClick'),
    }),
  ],
};
