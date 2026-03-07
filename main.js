const library = [];

//Establish book constructor and methods
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

//This works, but I still don't 100% understand it
function removeBookById(id) {
  const indexOfBook = library.findIndex((book) => book.id === id);
  if (indexOfBook !== -1) {
    library.splice(indexOfBook, 1);
  }
}

//DOM selectors
const libraryGrid = document.querySelector("#library");
const addBookBtn = document.querySelector(".add-book-btn");
const form = document.querySelector("form");
const bookTitle = document.querySelector(".book-title");
const bookAuthor = document.querySelector(".book-author");
const isbn = document.querySelector(".isbn");
const haveYouRead = document.querySelector(".have-read");

//shows and hides the add book section
addBookBtn.addEventListener("click", () => {
  form.classList.toggle("open");
  bookTitle.focus();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //exits the form unless these are both filled out
  if (!bookTitle.value) {
    return;
  }

  const newBook = new Book(bookTitle.value, bookAuthor.value, isbn.value, haveYouRead.value);

  //creates book elements
  const bookCard = document.createElement("div");
  const bookContent = document.createElement("div");
  const removeBookXBtn = document.createElement("button");

  bookCard.classList.add("bookCard");
  bookContent.classList.add("bookContent");
  removeBookXBtn.classList.add("remove-book-x-btn");

  //adds book id to both the book and the X button to be
  //associated together later if needed
  bookCard.dataset.bookId = newBook.id;
  removeBookXBtn.dataset.bookId = newBook.id;

  bookContent.textContent = newBook.title;
  removeBookXBtn.textContent = "X";

  //adds book to the DOM library
  bookCard.appendChild(bookContent);
  bookCard.appendChild(removeBookXBtn);
  libraryGrid.appendChild(bookCard);

  //adds book to the library array
  addToLibrary(newBook);

  bookCard.addEventListener("mouseover", () => {
    removeBookXBtn.classList.add("x-btn-visible");
  });

  bookCard.addEventListener("mouseout", () => {
    removeBookXBtn.classList.remove("x-btn-visible");
  });

  form.reset();
  bookTitle.focus();
});

//removes book from library array and dom library
libraryGrid.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-book-x-btn")) {
    const bookId = e.target.dataset.bookId;
    removeBookById(bookId);
    e.target.closest(".bookCard").remove();
  }
});
