import { AuthorsHTML } from './authors.js'
import { BooksHTML } from './books.js'

const mainContainer = document.querySelector('#main_container')
mainContainer.innerHTML = `
  <div id="authors">${AuthorsHTML()}</div>
  <div id="books">${BooksHTML()}</div>
`

//^ Advanced: Make a form module for posting a new book to database
