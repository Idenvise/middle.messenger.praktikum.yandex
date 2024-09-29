import './Input.scss';
import Block from '../../frameworks/Block';

interface InputProps {
  textAlign?: string;
  inputType: string;
  inputValue?: string;
  inputName: string;
  isReadOnly: boolean;
  labelText: string;
  onClick?: (e: Event) => void;
}

export class Input extends Block {
  constructor(props: InputProps) {
    super({
      events: {
        click: (e: Event) => props.onClick && props.onClick(e),
      },
      ...props,
    });
  }

  override render(): string {
    return `
    <div class='form__item'>
      <input 
        class='input {{textAlign}}'
        type='{{inputType}}'
        value='{{inputValue}}'
        name='{{inputName}}'
        required
        autocomplete
        placeholder
        {{isReadOnly}}
      />
      <label
        class='auth__label'
      >
        {{labelText}}
      </label>
    </div>`;
  }
}
