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
