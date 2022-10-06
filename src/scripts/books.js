//? import needed getter functions for displaying authors (authors, books, genres)
import { getBooks } from "./dataAccess.js";

export const BooksHTML = () => {
  const books = getBooks();
  let html = `<div>Books</div><ul>`;

  for (const currentBook of books) {
    html += `<li class="book" id="book--${currentBook.id}">${currentBook.title}</li>`;
  }
  html += "</ul>";
  return html;
};

//* If user clicks on book, an alert displays showing the title, genre, and author of book
document.addEventListener("click", (event) => {
  const currentTarget = event.target;
  if (currentTarget.id.startsWith("book")) {
    const [, bookId] = currentTarget.id.split("--");
    const selectedBook = books.find((book) => parseInt(bookId) === book.id);
    const bookGenre = genres.find((genre) => selectedBook.genreId === genre.id);
    const bookAuthor = authors.find(
      (author) => selectedBook.authorId === author.id
    );

    window.alert(
      `${selectedBook.title} is ${bookGenre.name} book written by ${bookAuthor.name}.`
    );
  }
});
