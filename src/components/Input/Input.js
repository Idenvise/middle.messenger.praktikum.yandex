import './Input.scss';
export default `
  <div class='form__item'>
    <input 
      class='input'
      type='{{inputType}}'
      value='{{inputValue}}'
      name='{{inputName}}'
      required
      autocomplete
      placeholder
    />
    <label
      class='auth__label'
    >
      {{labelText}}
    </label>
  </div>`;
