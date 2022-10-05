const API = 'http://localhost:8088/'

const applicationState = {
  books: [],
  genres: [],
  authors: [],
}

// FETCH CALLS

// GETTER FUNCTIONS
export const getBooks = () => {
  return applicationState.books.map((book) => ({ ...book }))
}

export const getAuthors = () => {
  return applicationState.authors.map((author) => ({ ...author }))
}

export const getGenres = () => {
  return applicationState.genres.map((genre) => ({ ...genre }))
}
