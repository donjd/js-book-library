window.addEventListener("load", () => {
  displayBooksInLibrary();
});

const library = [];

function Book(title, author) {
  this.title = title;
  this.author = author;
  this.id = createUniqueId();
}

Book.prototype.displayBookInfo = function () {
  return `Title: ${this.title}, Author: ${this.author}, Book ID: ${this.id}`;
};

function createUniqueId() {
  return crypto.randomUUID();
}

function addBookToLibrary(...books) {
  library.push(...books);
}

const libraryGrid = document.querySelector("#library");

function displayBooksInLibrary() {
  if (!libraryGrid) return;
  libraryGrid.innerHTML = "";

  library.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("bookCard");

    const bookContent = document.createElement("div");
    bookContent.classList.add("bookContent");

    bookContent.textContent = book.title;

    bookCard.appendChild(bookContent);
    libraryGrid.appendChild(bookCard);
  });
}

const hungerGames = new Book("Hunger Games", "Suzanne Collins");
const hatchet = new Book("Hatchet", "Gary Paulsen");
const gooseGirl = new Book("Goose Girl", "Shannon Hale");
const afterDark = new Book("After Dark", "Murakami");
const mazeRunner = new Book("Maze Runner", "Author");

addBookToLibrary(hungerGames, hatchet, gooseGirl, afterDark, mazeRunner);

// on page load, determine lenght of libary array and create that many
// cards.
//

const addBookBtn = document.querySelector(".add-book-btn");
const form = document.querySelector("form");

addBookBtn.addEventListener("click", () => {
  form.classList.toggle("open");
});

const addBookToLibraryBtn = document.querySelector(".add-book-to-library-btn");
const bookTitle = document.querySelector(".book-title");
const bookAuthor = document.querySelector(".book-author");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const newBookTitle = bookTitle.value;
  const newBookAuthor = bookAuthor.value;

  const newBook = new Book(newBookTitle, newBookAuthor);

  addBookToLibrary(newBook);
  displayBooksInLibrary();
  form.reset();
});
