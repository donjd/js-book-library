const libraryGrid = document.querySelector("#library");
const addBookBtn = document.querySelector(".add-book-btn");
const form = document.querySelector("form");
const bookTitle = document.querySelector(".book-title");
const bookAuthor = document.querySelector(".book-author");
const isbn = document.querySelector(".isbn");

addBookBtn.addEventListener("click", () => {
  form.classList.toggle("open");
  bookTitle.focus();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!bookTitle.value || !bookAuthor.value) {
    return;
  }

  const haveReadSelection = document.querySelector('input[name="have-read"]:checked');

  const newBook = new Book(bookTitle.value, bookAuthor.value, isbn.value, haveReadSelection.value);

  library.push(newBook);
  renderPage();
  form.reset();
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

    const bookCardX = document.createElement("button");
    bookCardX.classList.add("remove-book-x-btn");
    bookCardX.textContent = "X";
    bookCardX.dataset.id = book.id;

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

libraryGrid.addEventListener("click", (e) => {
  if (e.target.className === "remove-book-x-btn") {
    deleteBook(e);
  }

  if (e.target.className === "sort-abc-ascending") {
    sortTitleABCAscending(e);
  }

  if (e.target.cassName === "sort-abc-decending") {
    sortTitleABCDecending(e);
  }
});

function deleteBook(e) {
  const id = e.target.dataset.id;
  const index = library.findIndex((book) => {
    return book.id == id;
  });

  library.splice(index, 1);
  console.log(library);
  renderPage();
}

function sortTitleABCAscending() {
  library.sort((a, b) => {
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();

    if (titleA < titleB) {
      return -1;
    }

    if (titleA > titleB) {
      return 1;
    }

    return 0;
  });
  renderPage();
}
function sortTitleABCDecending() {
  library.sort((a, b) => {
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();

    if (titleA < titleB) {
      return 1;
    }

    if (titleA > titleB) {
      return -1;
    }

    return 0;
  });
  renderPage();
}
