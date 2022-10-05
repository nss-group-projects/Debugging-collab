import { getAuthors } from './database.js'
import { getBooks } from './database.js'

const authors = getAuthors()
const books = getBooks()

export const AuthorsHTML = () => {
  let html = `<div>Authors</div><ul>`

  for (const currentAuthor of authors) {
    //! Bug: Make this author.name instead
    html += `<li class="author" id="author--${currentAuthor.id}">${currentAuthor.name}</li>`
  }

  return html
}

//? When does this code run?
document.addEventListener('click', (event) => {
  //? What is event? What is target??
  const currentTarget = event.target

  if (currentTarget.id.startsWith('author')) {
    //? What does this weird code do?
    const [, authorId] = currentTarget.id.split('--')
    //! Bug: remove parseInt
    const selectedAuthor = authors.find(
      (author) => parseInt(authorId) === author.id
    )

    //! Bug: Make this a const
    let bookCount = 0

    for (const currentBook of books) {
      //! Bug: make this currentBook.id instead of currentBook.authorId
      if (selectedAuthor.id === currentBook.authorId) {
        bookCount++
      }
    }

    window.alert(
      `There are ${bookCount} books by ${selectedAuthor.name} in the library.`
    )
  }
})
