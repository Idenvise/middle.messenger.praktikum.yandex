import './error.scss';
import Block from '../../frameworks/Block';

interface Props {
  [key: string]: any;
}

export class Error extends Block {
  constructor(props: Props) {
    super(props);
  }

  override render() {
    return `
      <main class='app'>
        <div class='notfound-page'>
          <h1 class='notfound__title'>{{errorCode}}</h1>
          <h2 class='notfound__desc'>{{errorMessage}}</h2>
          {{{BorderlessButton}}}
        </div>
      </main>
    `;
  }
}
