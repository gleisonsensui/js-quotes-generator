import './header.css';

export default class Header {
  createHeader() {
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const liHome = document.createElement('li');    
    const liQuote = document.createElement('li');
    const linkHome = document.createElement('a');
    const linkQuote = document.createElement('a')

    header.appendChild(nav)
    nav.appendChild(ul)
    ul.appendChild(liHome)
    ul.appendChild(liQuote)
    liHome.appendChild(linkHome)
    liQuote.appendChild(linkQuote)


  }
}
