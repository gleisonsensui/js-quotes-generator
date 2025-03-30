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
  }

  saveQuote() {
    let quoteNew = {
      quote: this.quoteEntry.value,
      author: this.authorEntry.value,
    };
    this.quote.addQuote(quoteNew);
  }

  getQuote() {
    let index = Math.floor(Math.random() * this.quote.sizeQuote()) - 1;
    this.quoteOutput.textContent = this.quote.getQuoteIndex().quote;
    this.authorOutput.textContent = this.quote.getQuoteIndex().author;
  }

  btnSendAction() {
    this.btnSend.addEventListener('click', () => {
        this.saveQuote();
    })
  }

  btnGeneratorAction() {
    this.btnGenerator.addEventListener('click', () => {
        this.getQuote();
    })
  }
}
