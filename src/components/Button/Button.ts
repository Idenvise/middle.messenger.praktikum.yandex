import './Button.scss';
import Block from '../../frameworks/Block';

export default interface ButtonProps {
  disabled?: boolean;
  type: string;
  name: string;
  buttonText: string;
  onClick: (e: Event) => void;
}

export class Button extends Block {
  constructor(props: ButtonProps) {
    super({
      events: {
        click: (e: Event) => props.onClick && props.onClick(e),
      },
    });
  }

  override render(): string {
    return `<button 
      class='button'
      {{#if disabled}}
      disabled
      {{/if}}
      type='{{buttonType}}'
      name='{{buttonName}}'
      >
        {{buttonText}}
      </button>`;
  }
}
