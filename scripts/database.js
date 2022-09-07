const database = {
  books: [
    {
      id: 1,
      title: 'The Lord of the Rings',
      authorId: 1,
      genreId: 4,
    },
    {
      id: 2,
      title: 'The Screwtape Letters',
      authorId: 4,
      genreId: 5,
    },
    {
      id: 3,
      title: 'Harry Potter and the Prisoner of Azkaban',
      authorId: 8,
      genreId: 4,
    },
    {
      id: 4,
      title: 'It',
      authorId: 5,
      genreId: 7,
    },
    {
      id: 5,
      title: 'The Clean Coder',
      authorId: 10,
      genreId: 11,
    },
    {
      id: 6,
      title: 'The Great Gatsby',
      authorId: 2,
      genreId: 1,
    },
    {
      id: 7,
      title: 'The Chronicles of Narnia',
      authorId: 4,
      genreId: 3,
    },
    {
      id: 8,
      title: 'Kiss the Girls',
      authorId: 9,
      genreId: 10,
    },
    {
      id: 9,
      title: 'Along Came a Spider',
      authorId: 9,
      genreId: 9,
    },
    {
      id: 10,
      title: 'A court of Thorns and Roses',
      authorId: 3,
      genreId: 4,
    },
    {
      id: 11,
      title: "Harry Potter and the Sorcerer's Stone",
      authorId: 8,
      genreId: 4,
    },
    {
      id: 12,
      title: 'This Side of Paradise',
      authorId: 2,
      genreId: 6,
    },
    {
      id: 13,
      title: 'A Game of Thrones',
      authorId: 6,
      genreId: 4,
    },
    {
      id: 14,
      title: 'Crescent city',
      authorId: 3,
      genreId: 4,
    },
    {
      id: 15,
      title: 'Carrie',
      authorId: 5,
      genreId: 7,
    },
    {
      id: 16,
      title: 'The Hobbit',
      authorId: 1,
      genreId: 4,
    },
    {
      id: 17,
      title: 'Throne of Glass',
      authorId: 3,
      genreId: 4,
    },
    {
      id: 18,
      title: 'Great Expectations',
      authorId: 7,
      genreId: 1,
    },
    {
      id: 19,
      title: 'Dune',
      authorId: 12,
      genreId: 2,
    },
    {
      id: 20,
      title: 'On Writing: A memoir of the craft',
      authorId: 5,
      genreId: 8,
    },
    {
      id: 21,
      title: 'Clean Code',
      authorId: 10,
      genreId: 11,
    },
    {
      id: 22,
      title: 'Dune',
      authorId: 11,
      genreId: 2,
    },
    {
      id: 23,
      title: 'Dune Messiah',
      authorId: 11,
      genreId: 2,
    },
    {
      id: 24,
      title: 'Fire and Blood',
      authorId: 6,
      genreId: 4,
    },
    {
      id: 25,
      title: 'Clean Architecture',
      authorId: 10,
      genreId: 11,
    },
    {
      id: 26,
      title: 'The Noise',
      authorId: 9,
      genreId: 10,
    },
  ],
  authors: [
    {
      id: 1,
      name: 'J.R.R. Tolkien',
    },
    {
      id: 2,
      name: 'F. Scott Fitzgerald',
    },
    {
      id: 3,
      name: 'Sarah J. Maas',
    },
    {
      id: 4,
      name: 'C.S. Lewis',
    },
    {
      id: 5,
      name: 'Stephen King',
    },
    {
      id: 6,
      name: 'George R.R. Martin',
    },
    {
      id: 7,
      name: 'Charles Dickens',
    },
    {
      id: 8,
      name: 'J. K. Rowling',
    },
    {
      id: 9,
      name: 'James Patterson',
    },
    {
      id: 10,
      name: 'Robert Cecil Martin',
    },
    {
      id: 11,
      name: 'Frank Herbert',
    },
  ],
  genres: [
    {
      id: 1,
      name: 'Fiction',
    },
    {
      id: 2,
      name: 'Science Fiction',
    },
    {
      id: 3,
      name: 'Adventure',
    },
    {
      id: 4,
      name: 'Fantasy',
    },
    {
      id: 5,
      name: 'Satire',
    },
    {
      id: 6,
      name: 'Romance',
    },
    {
      id: 7,
      name: 'Horror',
    },
    {
      id: 8,
      name: 'Autobiography',
    },
    {
      id: 9,
      name: 'Mystery',
    },
    {
      id: 10,
      name: 'Thriller',
    },
    {
      id: 11,
      name: 'Reference',
    },
  ],
}

export const getBooks = () => {
  return database.books.map((book) => ({ ...book }))
}

export const getAuthors = () => {
  return database.authors.map((author) => ({ ...author }))
}

export const getGenres = () => {
  return database.genres.map((genre) => ({ ...genre }))
}
