import './chats.scss';
import Block from '../../frameworks/Block';

interface Props {
  [key: string]: any;
}

export class Chats extends Block {
  constructor(props: Props) {
    super(props);
  }

  override render() {
    return `
      <main class='app'>
        <div class='chats'>
          <aside class='chats__list'>
            <ul class='chat__list__items'>

              <div class='search__wrapper'>
                <input
                  class='chats__search'
                  name='search'
                  type='text'
                  placeholder='Поиск'
                />
                <img
                  class='search__icon svg__button'
                  src='images/search__icon.svg'
                  alt='Поиск'
                />
              </div>
              {{{ChatElement}}}
            </ul>
          </aside>
          {{#if currentChat}}
            <div class='chat_current_chat'>
              <div class='chat__user-info'>
                {{#if currentChat.photo}}
                  <img
                    class='chat__user__photo'
                    src={{currentChat.photo}}
                    alt='Фото пользователя'
                  />
                {{else}}
                  <div class='chat__user__photo chat__user__photo_none'>

                  </div>
                {{/if}}
                <p class='chat__current__username'>Вадим</p>
                <img
                  class='chat__ellipsis svg__button'
                  src='images/ellipsis__icon.svg'
                  alt='Функции чата'
                />
              </div>
              <div class='chat__messages__wrapper'>

              </div>

              <div class='chat__message__input__wrapper'>
                <img
                  class='chat__message__attach__icon svg__button'
                  src='images/attach__icon.svg'
                  alt='Прикрепить'
                />
                <input
                  class='chat__message__input'
                  placeholder='Сообщение'
                  name='message'
                />
                <img
                  class='chat__message__attach__icon svg__button'
                  src='images/arrow__in__circle.svg'
                  alt='Отправить сообщение'
                />
              </div>
            </div>
          {{else}}
            <div class="chat_current_nothing">
              <p class='chat_nothing item__text'>Выберите чат чтобы отправить
                сообщение
              </p>
            </div>
          {{/if}}
          {{#if actionForm}}
          <div class='chat__action-popup action-popup'>
            <form class='chat__action-form action-form' name={{actionForm.formName}}>
              <h2 class='chat__action-title'>{{actionForm.formActionTitle}}</h2>
              {{#if actionForm.inputPlaceholder}}
                {{>Input inputType='text' inputName='login' labelText=actionForm.inputPlaceholder}}
              {{/if}}
              {{>Button buttonType='submit' buttonName=actionForm.formSubmitName buttonText=actionForm.formSubmitText }}
            </form>
          </div>
          {{/if}}
        </div>
      </main>
    `;
  }
}
