"use strict";
const book = {
    id: 1,
    tittle: "el axel",
    author: "axel",
};
const books = [];
function getBook() {
    return { id: 1, tittle: "el axel", author: "axel", };
}
const myBook = getBook();
function createBook(book) {
    return book;
}
const newBook = {
    id: 1, tittle: "el axel", author: "axel", coAuthor: "yeremi"
};
createBook(newBook);
