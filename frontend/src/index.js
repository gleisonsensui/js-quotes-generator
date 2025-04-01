import '../public/index.html';
import '../public/styles/stylesheet.css';
import QuoteEntryComponent from './components/quote-entry/QuoteEntryComponent.js';
import QuoteOutputComponent from './components/quote-output/QuoteOutputComponent.js';
import QuoteController from '../public/scripts/QuoteController.js';

const quoteEntry = new QuoteEntryComponent();
const quoteOutput = new QuoteOutputComponent();
const quoteInstance = new QuoteController();

