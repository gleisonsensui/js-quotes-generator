import './QuoteEntry.css'

export default class QuoteEntryComponent extends HTMLElement {
    constructor() {
        super();
        this.markup = `
    <div class="container">
      <div class="quote">
        <div class="quote-group">
          <label for="quote-entry">Citação</label>
          <input type="text" name="quote" id="quote-entry" />
        </div>
        <div class="quote-group">
          <label for="author-entry">Autor</label>
          <input type="text" name="author" id="author-entry" />
        </div>
        <p class="author"></p>
        <button class="btn-quote" id="btn-send">Enviar</button>
      </div>
    </div>
    `
    this.innerHTML = this.markup;
    }

    connectedCallback() {
        console.log('quote-entry carregado com sucesso.')
    }
}

customElements.define('quote-entry', QuoteEntryComponent);