// window.addEventListener("load", () => {
//   displayBooksInLibrary();
// });

const library = [];

function Book(title, author) {
  this.title = title;
  this.author = author;
  this.id = crypto.randomUUID();
}

Book.prototype.displayBookInfo = function () {
  return `Title: ${this.title}, Author: ${this.author}, Book ID: ${this.id}`;
};

function addBookToLibrary(...books) {
  library.push(...books);
}

const libraryGrid = document.querySelector("#library");
const addBookBtn = document.querySelector(".add-book-btn");
const form = document.querySelector("form");
const addBookToLibraryBtn = document.querySelector(".add-book-to-library-btn");
const bookTitle = document.querySelector(".book-title");
const bookAuthor = document.querySelector(".book-author");

addBookBtn.addEventListener("click", () => {
  form.classList.toggle("open");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const newBookTitle = bookTitle.value;
  const newBookAuthor = bookAuthor.value;

  const newBook = new Book(newBookTitle, newBookAuthor);

  library.push(newBook);

  const bookCard = document.createElement("div");
  const bookContent = document.createElement("div");

  bookCard.classList.add("bookCard");
  bookContent.classList.add("bookContent");

  bookContent.textContent = newBook.title;

  bookCard.appendChild(bookContent);
  libraryGrid.appendChild(bookCard);

  // addBookToLibrary(newBook);
  // displayBooksInLibrary();
  form.reset();
  console.log(library);
});
