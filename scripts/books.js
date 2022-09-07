import { getAuthors, getBooks, getGenres } from './database.js'

const books = getBooks()
const authors = getAuthors()
const genres = getGenres()

export const BooksHTML = () => {
  let html = `<div>Books</div><ul>`

  for (const currentBook of books) {
    html += `<li class="book" id="book--${currentBook.id}">${currentBook.title}</li>`
  }
  return html
}

//? When does this code run?
document.addEventListener('click', (event) => {
  //? What is event? What is target??
  const currentTarget = event.target

  if (currentTarget.id.startsWith('books')) {
    //? What does this weird code do?
    const [, bookId] = currentTarget.id.split('--')
    const selectedBook = books.find((book) => parseInt(bookId) === book.id)
    const bookGenre = genres.find((genre) => parseInt(bookId) === genre.id)
    const bookAuthor = authors.find(
      (author) => selectedBook.authorId === author.id
    )

    window.alert(
      `${selectedBook.title} is ${bookGenre.name} book written by ${bookAuthor}.`
    )
  }
})
