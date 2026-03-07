const libraryGrid = document.querySelector("#library");
const addBookBtn = document.querySelector(".add-book-btn");
const form = document.querySelector("form");
const bookTitle = document.querySelector(".book-title");
const bookAuthor = document.querySelector(".book-author");
const isbn = document.querySelector(".isbn");
const haveYouRead = document.querySelector(".have-read");
const library = [];

addBookBtn.addEventListener("click", () => {
  form.classList.toggle("open");
  bookTitle.focus();
});

function Book(title, author, isbn, haveRead) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title = title;
  this.author = author;
  this.isbn = isbn;
  this.haveRead = haveRead;
  this.id = crypto.randomUUID();
}

function addToLibrary(book) {
  library.push(book);
}
