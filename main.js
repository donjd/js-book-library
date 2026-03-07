const libraryGrid = document.querySelector("#library");
const addBookBtn = document.querySelector(".add-book-btn");
const form = document.querySelector("form");
const bookTitle = document.querySelector(".book-title");
const bookAuthor = document.querySelector(".book-author");
const isbn = document.querySelector(".isbn");
const haveYouRead = document.querySelector(".have-read");

addBookBtn.addEventListener("click", () => {
  form.classList.toggle("open");
  bookTitle.focus();
});

const library = [];

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

function renderPage() {
  library.forEach((book) => {
    const bookCard = Document.createElement("article");
    bookCard.classList.add("bookCard");
    bookCard.textContent = "hello";

    libraryGrid.appendChild(bookCard);
  });
}

const harryPotter = new Book("Harry Potter", "JK", 1234, true);
const dune = new Book("Dune", "Frank", 1234, true);
const theHobbit = new Book("The Hobbit", "JRR", 1234, true);

library.push(harryPotter);
library.push(dune);
library.push(theHobbit);

console.log(library);
