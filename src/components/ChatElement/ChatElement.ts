import './ChatElement.scss';
import Block from '../../frameworks/Block';

interface ChatElementProps {
  image: string;
  name: string;
  lastMessage: string;
  date: string;
  unreadMessage: number;
  onClick: (e: Event) => void;
}

export class ChatElement extends Block {
  constructor(props: ChatElementProps) {
    super({
      events: {
        click: (e: Event) => props.onClick && props.onClick(e),
      },
      ...props,
    });
  }

  override render(): string {
    return `
      <li class='chat__item'>
        <img
          class='chat__item__photo'
          src={{image}}
          alt='Фото пользователя'
        />
        <div class='chat__data__wrapper'>
          <p class='chat__username item__text'>{{name}}</p>
          {{#if lastMessage}}
            <p
              class='chat__last-message item__text'
            >{{lastMessage}}</p>
          {{/if}}
        </div>
        <div class='chat__data__wrapper'>
          <p class='chat__date item__text'>{{date}}</p>
          {{#if unreadMessage}}
            <p class='chat__unread item__text'>{{unreadMessage}}</p>
          {{/if}}
        </div>
      </li>
    `;
  }
}
