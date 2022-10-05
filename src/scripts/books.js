import { getAuthors, getBooks, getGenres } from './database.js'

const books = getBooks()
const authors = getAuthors()
const genres = getGenres()

export const BooksHTML = () => {
  let html = `<div>Books</div><ul>`

  for (const currentBook of books) {
    //! Bug make this currentBook.name
    html += `<li class="book" id="book--${currentBook.id}">${currentBook.title}</li>`
  }

  //! Bug: Remove return statement
  return html
}

//? When does this code run?
document.addEventListener('click', (event) => {
  //? What is event? What is target??
  const currentTarget = event.target

  //! Bug: Make this check for 'books' instead of books
  if (currentTarget.id.startsWith('book')) {
    //? What does this weird code do?
    const [, bookId] = currentTarget.id.split('--')
    const selectedBook = books.find((book) => parseInt(bookId) === book.id)
    //! Bug: Make this parseInt(bookId)
    const bookGenre = genres.find((genre) => selectedBook.genreId === genre.id)
    const bookAuthor = authors.find(
      (author) => selectedBook.authorId === author.id
    )

    //! Bug: Make this just bookAuthor
    window.alert(
      `${selectedBook.title} is ${bookGenre.name} book written by ${bookAuthor.name}.`
    )
  }
})
