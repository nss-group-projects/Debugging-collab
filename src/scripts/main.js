/* 
  Data structures
  Loops
  Modules
  Events
  HTML
  Connected data
  Functions

  Ideas: 
    Books and Authors
    Randomly recommend a book

  Bugs:
    Cannot assign properties to null
    number === string
    undefined
    click event not running
    data not matching.

*/

import { AuthorsHTML } from './authors.js'
import { BooksHTML } from './books.js'

const modals = document.querySelectorAll('[data-modal]')

modals.forEach(function (trigger) {
  trigger.addEventListener('click', function (event) {
    event.preventDefault()
    const modal = document.getElementById(trigger.dataset.modal)
    modal.classList.add('open')
    const exits = modal.querySelectorAll('.modal-exit')
    exits.forEach(function (exit) {
      exit.addEventListener('click', function (event) {
        event.preventDefault()
        modal.classList.remove('open')
      })
    })
  })
})

//! BUG: Make this select a class instead of id
const mainContainer = document.querySelector('#main_container')
//! Bug: remove invocation for one of these
mainContainer.innerHTML = `
  <div id="authors">${AuthorsHTML()}</div>
  <div id="books">${BooksHTML()}</div>
`
