import './Button.scss';
import Block from '../../frameworks/Block';

interface ButtonProps {
  disabled?: boolean;
  buttonType: string;
  buttonName: string;
  buttonText: string;
  onClick: (e: Event) => void;
}

export class Button extends Block {
  constructor(props: ButtonProps) {
    super({
      events: {
        click: (e: Event) => props.onClick && props.onClick(e),
      },
      ...props,
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
