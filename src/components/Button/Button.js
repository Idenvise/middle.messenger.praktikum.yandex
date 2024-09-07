import './Button.scss';
export default `<button 
  id='{{buttonId}}'
  class='button'
  {{#if disabled}}
  disabled
  {{/if}}
  >
    {{buttonText}}
  </button>`;
