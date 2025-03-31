import QuoteModel from './QuoteModel.js';

export default class QuoteController {
  constructor() {
    this.quote = new QuoteModel();
    this.quoteEntry = document.querySelector('#quote-entry');
    this.authorEntry = document.querySelector('#author-entry');
    this.quoteOutput = document.querySelector('#quote-output');
    this.authorOutput = document.querySelector('#author-output');
    this.btnGenerator = document.querySelector('#btn-generator');
    this.btnSend = document.querySelector('#btn-send');

    this.btnGeneratorAction();
    this.btnSendAction();
  }

  saveQuote() {
    let quoteNew = {
      quote: this.quoteEntry.value,
      author: this.authorEntry.value,
    };
    this.quote.addQuote(quoteNew);
    this.cleanEntry();
  }

  getQuote() {    
    let [citacao] = this.quote.getQuoteByIndex(this.indexGenerator());
    this.quoteOutput.textContent = citacao.quote;
    this.authorOutput.textContent = citacao.author;
  }

  btnSendAction() {
    this.btnSend.addEventListener('click', () => {
      this.saveQuote();
    });
  }

  btnGeneratorAction() {
    this.btnGenerator.addEventListener('click', () => {
      this.getQuote();
    });
  }

  cleanEntry() {
    this.quoteEntry.value = '';
    this.authorEntry.value = '';
  }

  indexGenerator() {
    return Math.floor(Math.random() * this.quote.sizeQuote());
  }
}
