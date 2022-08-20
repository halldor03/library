// CONSTANTS
const shelf = document.getElementById("shelf");
//

//REMOVE BOOK
removeBookFromLibrary = function (e) {
  console.log(e);
};
//

// SAMPLE BOOK
const sampleBook = new book("Factfullness", "Hans Rosling", 368, "No");
function displaySampleBook(book) {
  let newRow = document.createElement("tr");
  shelf.appendChild(newRow);

  let addedBookTitle = document.createElement("td");
  newRow.appendChild(addedBookTitle);
  addedBookTitle.textContent = book.title;

  let addedBookAuthor = document.createElement("td");
  newRow.appendChild(addedBookAuthor);
  addedBookAuthor.textContent = book.author;

  let addedBookPages = document.createElement("td");
  newRow.appendChild(addedBookPages);
  addedBookPages.textContent = book.pages;

  let addedBookReadStatus = document.createElement("td");
  newRow.appendChild(addedBookReadStatus);
  addedBookReadStatus.textContent = book.isRead;

  let removeBook = document.createElement("td");
  newRow.appendChild(removeBook);
  let removeBookButton = document.createElement("button");
  removeBook.appendChild(removeBookButton);
  removeBookButton.textContent = "Remove";
  removeBookButton.addEventListener("click", removeBookFromLibrary);
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
}
//

// ADD BOOK
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
  let newRow = document.createElement("tr");
  shelf.appendChild(newRow);

  let addedBookTitle = document.createElement("td");
  newRow.appendChild(addedBookTitle);
  addedBookTitle.textContent = book.title;

  let addedBookAuthor = document.createElement("td");
  newRow.appendChild(addedBookAuthor);
  addedBookAuthor.textContent = book.author;

  let addedBookPages = document.createElement("td");
  newRow.appendChild(addedBookPages);
  addedBookPages.textContent = book.pages;

  let addedBookReadStatus = document.createElement("td");
  newRow.appendChild(addedBookReadStatus);
  addedBookReadStatus.textContent = book.isRead;

  let removeBook = document.createElement("td");
  newRow.appendChild(removeBook);
  let removeBookButton = document.createElement("button");
  removeBook.appendChild(removeBookButton);
  removeBookButton.textContent = "Remove";
  removeBookButton.addEventListener("click", removeBookFromLibrary);
}

addBook.addEventListener("click", addBookToLibrary);
//
