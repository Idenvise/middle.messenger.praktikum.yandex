import './Input.scss';
export default `
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
interface InputProps {
  textAlign: string;
  type: string;
  value: string;
  name: string;
}

export class Link extends Block {
  constructor(props: LinkProps) {
    super({
      ...props,
      events: {
        click: (e: Event) => props.onClick && props.onClick(e),
      },
    });
  }

  override render(): string {
    return '<a href="{{href}}" class="{{class}}" data-page="{{datapage}}">{{text}}</a>';
  }
}
