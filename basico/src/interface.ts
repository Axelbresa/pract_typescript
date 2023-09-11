interface book {
    id: number,
    tittle: string,
    author: string,
    coAuthor?: string,
    isLoan?: (id: number) => void
}

const book: book = {
    id: 1,
    tittle: "el axel",
    author: "axel",
}

const books: book[] = [];

function getBook(): book {
    return { id: 1, tittle: "el axel", author: "axel", }
}
const myBook = getBook();

function createBook(book: book): book {
    return book
}

const newBook: book = {
    id: 1, tittle: "el axel", author: "axel", coAuthor: "yeremi"
}
createBook(newBook);