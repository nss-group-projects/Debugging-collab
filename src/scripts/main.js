import { AuthorsHTML } from "./authors.js";
import { bookForm } from "./bookForm.js";
import { BooksHTML } from "./books.js";
import { fetchAuthors, fetchBooks } from "./dataAccess.js";

const mainContainer = document.querySelector("#main_container");

const shmenderSHMAYTCHTEEEMEL = () => {
  fetchAuthors()
    .then(() => fetchBooks())
    .then(() => {
      mainContainer.innerHTML = `
        <div id="authors">${AuthorsHTML()}</div>
        <div id="bookForm">${bookForm()}</div></br>
        <div id="books">${BooksHTML()}</div>
      `;
    });
};

shmenderSHMAYTCHTEEEMEL();

//? Advanced: Make a form module for posting a new book to database
