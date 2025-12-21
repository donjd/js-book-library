const library = [];

function Book(title, author) {
  this.title = title;
  this.author = author;
  this.id = crypto.randomUUID();
}

Book.prototype.displayBookInfo = function () {
  return `Title: ${this.title}, Author: ${this.author}, Book ID: ${this.id}`;
};

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

  if (!bookTitle.value || !bookAuthor.value) {
    return;
  }

  const newBookTitle = bookTitle.value;
  const newBookAuthor = bookAuthor.value;

  const newBook = new Book(newBookTitle, newBookAuthor);

  library.push(newBook);

  const bookCard = document.createElement("div");
  const bookContent = document.createElement("div");
  const removeBookXBtn = document.createElement("button");

  bookCard.classList.add("bookCard");
  bookContent.classList.add("bookContent");
  removeBookXBtn.classList.add("remove-book-x-btn");

  bookCard.dataset.bookId = newBook.id;
  removeBookXBtn.dataset.bookId = newBook.id;

  bookContent.textContent = newBook.title;
  removeBookXBtn.textContent = "X";

  bookCard.appendChild(bookContent);
  bookCard.appendChild(removeBookXBtn);
  libraryGrid.appendChild(bookCard);

  bookCard.addEventListener("mouseover", () => {
    removeBookXBtn.classList.add("x-btn-visible");
  });

  bookCard.addEventListener("mouseout", () => {
    removeBookXBtn.classList.remove("x-btn-visible");
  });

  form.reset();
  bookTitle.focus();
});

libraryGrid.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-book-x-btn")) {
    const matchingBook = e.target.closest(".bookCard");
    matchingBook.remove();
  }
});
