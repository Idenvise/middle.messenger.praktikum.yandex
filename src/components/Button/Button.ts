import "./Button.scss";
export default `<button 
  class='button'
  {{#if disabled}}
  disabled
  {{/if}}
  type='{{buttonType}}'
  name='{{buttonName}}'
  >
    {{buttonText}}
  </button>`;
