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
