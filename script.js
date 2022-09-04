// CONSTANTS
const shelf = document.getElementById("shelf");
const myLibrary = [];
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
  let readStatusButton = document.createElement("button");
  readStatusButton.textContent = "Read";
  addedBookReadStatus.appendChild(readStatusButton);
  readStatusButton.addEventListener("click", () => {
    if (readStatusButton.textContent === "Not read") {
      readStatusButton.textContent = "Read";
    } else readStatusButton.textContent = "Not read";
  });

  let removeBook = document.createElement("td");
  newRow.appendChild(removeBook);
  let removeBookButton = document.createElement("button");
  removeBook.appendChild(removeBookButton);
  removeBookButton.textContent = "Remove";
  removeBookButton.addEventListener("click", () => {
    newRow.remove();
  });
}
displaySampleBook(sampleBook);
//

// OBJECT CONSTRUCTOR
function book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}
//

// ADD BOOK
function addBookToLibrary() {
  let bookTitle = formTitle.value;
  let bookAuthor = formAuthor.value;
  let bookPages = formPages.value;
  let newBook = new book(bookTitle, bookAuthor, bookPages);
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
  let readStatusButton = document.createElement("button");
  if (formRead.checked === true) {
    readStatusButton.textContent = "Read";
    addedBookReadStatus.appendChild(readStatusButton);
  } else {
    readStatusButton.textContent = "Not read";
    addedBookReadStatus.appendChild(readStatusButton);
  }
  readStatusButton.addEventListener("click", () => {
    if (readStatusButton.textContent === "Not read") {
      readStatusButton.textContent = "Read";
    } else readStatusButton.textContent = "Not read";
  });

  let removeBook = document.createElement("td");
  newRow.appendChild(removeBook);
  let removeBookButton = document.createElement("button");
  removeBook.appendChild(removeBookButton);
  removeBookButton.textContent = "Remove";
  removeBookButton.addEventListener("click", () => {
    newRow.remove();
  });
}

addBook.addEventListener("click", addBookToLibrary);
//
