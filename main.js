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
  libraryGrid.textContent = "";

  library.forEach((book) => {
    const bookCard = document.createElement("article");
    bookCard.classList.add("bookCard");

    const bookCardX = document.createElement("div");
    bookCardX.classList.add("remove-book-x-btn");
    bookCardX.textContent = "X";

    const bookCardTitle = document.createElement("p");
    bookCardTitle.textContent = book.title;

    const bookCardAuthor = document.createElement("p");
    bookCardAuthor.textContent = book.author;

    bookCard.appendChild(bookCardX);
    bookCard.appendChild(bookCardTitle);
    bookCard.appendChild(bookCardAuthor);
    libraryGrid.appendChild(bookCard);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const newBook = new Book(bookTitle.value);

  library.push(newBook);
  renderPage();
  form.reset();
  bookTitle.focus();
});
