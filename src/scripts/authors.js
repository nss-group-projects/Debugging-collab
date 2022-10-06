//? import needed getter functions for displaying authors (authors, books)
import { getAuthors } from "./dataAccess.js";

export const AuthorsHTML = () => {
  const authors = getAuthors();

  let html = `<div>Authors</div><ul>`;

  for (const currentAuthor of authors) {
    html += `<li class="author" id="author--${currentAuthor.id}">${currentAuthor.name}</li>`;
  }
  html += "</ul>";

  return html;
};

//* If user clicks on author, an alert displays showing how many books the author has written
document.addEventListener("click", (event) => {
  const currentTarget = event.target;

  if (currentTarget.id.startsWith("author")) {
    const [, authorId] = currentTarget.id.split("--");
    const selectedAuthor = authors.find(
      (author) => parseInt(authorId) === author.id
    );

    let bookCount = 0;

    for (const currentBook of books) {
      if (selectedAuthor.id === currentBook.authorId) {
        bookCount++;
      }
    }

    window.alert(
      `There are ${bookCount} books by ${selectedAuthor.name} in the library.`
    );
  }
});
