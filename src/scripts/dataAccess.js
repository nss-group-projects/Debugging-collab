const applicationState = {
  books: [],
  genres: [],
  authors: [],
};

// FETCH CALLS
//? Write fetch calls to get data
export const fetchAuthors = () => {
  return fetch("http://localhost:8088/authors")
    .then((response) => response.json())
    .then((yerboisAuthorData) => {
      applicationState.authors = yerboisAuthorData;
    });
};

export const fetchBooks = () => {
  return fetch("http://localhost:8088/books")
  .then((res) => res.json())
  .then((dataFromResponse) => {
    applicationState.books = dataFromResponse
  })
}

// GETTER FUNCTIONS
//? Write getter functions to get application state

export const getAuthors = () => {
   return applicationState.authors.map((author) => ({...author}));
};

export const getBooks = () => {
  return applicationState.books.map((book) => ({...book}))
}