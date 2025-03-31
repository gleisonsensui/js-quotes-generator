export default class QuoteModel {
  constructor() {
    this._quotesList = [
      {
        quote:
          'Eu acredito no amor. Eu creio que pode existir alguma chance e eu sempre acho que pode ser diferente. Talvez essa seja a explicação de todas decepções.',
        author: 'Pequena sereia',
      },
      {
        quote:
          'Creio no riso e nas lágrimas como antídotos contra o ódio e o terror.',
        author: 'Charles Chaplin',
      },
      {
        quote:
          'Seja como for o que penses, creio que é melhor dizê-lo com boas palavras.',
        author: 'Willian Shakespeare',
      },
    ];
    this._quote = '';
    this._author = '';
  }

  get quote() {
    return this._quote;
  }

  set quote(value) {
    this._quote = value;
  }

  get author() {
    return this._author;
  }

  set author(value) {
    this._author = value;
  }

  get quoteList() {
    return this._quotesList;
  }

  addQuote(quote) {
    this._quotesList.push(quote);
  }

  removeQuote() {
    this._quotesList.pop();
  }

  sizeQuote() {
    return this._quotesList.length;
  }

  getQuoteByIndex(indexEntry) {
    return this.quoteList.filter((item, index) => {
      if (index === indexEntry) {
        return item;
      }
    });
  }
}
