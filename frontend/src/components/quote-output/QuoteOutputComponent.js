import './QuoteOutput.css';

export default class QuoteOutputComponent extends HTMLElement {
  constructor() {
    super();
    this.markup = `
        <div class="container">
      <div class="quote q-top">
        <p class="text" id="quote-output">
          CLique no botão para gerar uma citação interessante...
        </p>
        <p class="author" id="author-output"></p>
        <button class="btn-quote" id="btn-generator">Gerar citação</button>
      </div>
    </div>
    `;
    this.innerHTML = this.markup;
  }

  connectedCallback() {
    console.log('quote-output carregado com sucesso.');
  }
}

customElements.define('quote-output', QuoteOutputComponent);
