// CONSTANTS
const shelf = document.getElementById("shelf");
//

// SAMPLE BOOK
const sampleBook = new book("Factfullness", "Hans Rosling", 368, "not read");
function displaySampleBook(book) {
  let addedBook = document.createElement("div");
  shelf.appendChild(addedBook);
  addedBook.classList.add("book");
  addedBook.textContent = book.info();
}
displaySampleBook(sampleBook);
//

const myLibrary = [sampleBook];

// OBJECT CONSTRUCTOR
function book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.info = function () {
    return title + " by " + author + ", " + pages + " pages long, " + isRead;
  };
}
//

function addBookToLibrary() {
  let bookTitle = formTitle.value;
  let bookAuthor = formAuthor.value;
  let bookPages = formPages.value;
  let bookReadStatus = "yes";
  let newBook = new book(bookTitle, bookAuthor, bookPages, bookReadStatus);
  myLibrary.push(newBook);
  displayBook(newBook);
}

function displayBook(book) {
  let addedBook = document.createElement("div");
  shelf.appendChild(addedBook);
  addedBook.classList.add("book");
  addedBook.textContent = book.info();
}

addBook.addEventListener("click", addBookToLibrary);
