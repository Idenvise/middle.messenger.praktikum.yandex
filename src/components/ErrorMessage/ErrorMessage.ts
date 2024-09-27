import Block from '../../frameworks/Block';
import './ErrorMessage.scss';

interface ErrorProps {
  errorText: string;
}

export class ErrorMessage extends Block {
  constructor(props: ErrorProps) {
    super({
      ...props,
    });
  }

  override render(): string {
    return `<h2 
        class='error__message'
        >
          {{errorText}}
        </h2>`;
  }
}
