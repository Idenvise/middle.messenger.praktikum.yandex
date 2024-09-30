import './BorderlessButton.scss';
import Block from '../../frameworks/Block';

interface BorderlessButtonProps {
  borderlessButtonId?: string;
  addClass?: string;
  borderlessButtonType: string;
  borderlessButtonName: string;
  borderlessButtonText: string;
  onClick: (e: Event) => void;
}

export class BorderlessButton extends Block {
  constructor(props: BorderlessButtonProps) {
    super({
      events: {
        click: (e: Event) => props.onClick && props.onClick(e),
      },
      ...props,
    });
  }

  override render(): string {
    return `<button 
      id='{{borderlessButtonId}}'
      class='borderless-button {{addClass}}'
      type='{{borderlessButtonType}}'
      name='{{borderlessButtonName}}'
      >
        {{borderlessButtonText}}
      </button>`;
  }
}
