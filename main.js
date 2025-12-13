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

const hungerGames = new Book("Hunger Games", "Suzanne Collins");
const hatchet = new Book("Hatchet", "Gary Paulsen");

addBookToLibrary(hungerGames, hatchet);

console.log(library);
