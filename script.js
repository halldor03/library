myLibrary = [];
let newRow;

class book {
  constructor(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
  }

  displayBooks() {
    if (!document.body.contains(newRow)) {
      this.refreshDOM();
    } else if (document.body.contains(newRow)) {
      // removing previously created rows in order to refresh DOM
      document.querySelectorAll(".newRow").forEach((e) => e.remove());
      this.refreshDOM();
    }
  }

  refreshDOM() {
    let shelf = document.getElementById("shelf");
    myLibrary.forEach((book) => {
      newRow = document.createElement("tr");
      newRow.classList.add("newRow");
      shelf.appendChild(newRow);

      // adding book title to DOM
      let addedBookTitle = document.createElement("td");
      newRow.appendChild(addedBookTitle);
      addedBookTitle.textContent = book.title;

      // adding book autor to DOM
      let addedBookAuthor = document.createElement("td");
      newRow.appendChild(addedBookAuthor);
      addedBookAuthor.textContent = book.author;

      // adding book pages to DOM
      let addedBookPages = document.createElement("td");
      newRow.appendChild(addedBookPages);
      addedBookPages.textContent = book.pages;

      // adding book read status to DOM and array
      let addedBookReadStatus = document.createElement("td");
      newRow.appendChild(addedBookReadStatus);
      let readStatusButton = document.createElement("button");
      if (book.readStatus === "read") {
        readStatusButton.textContent = "Read";
        addedBookReadStatus.appendChild(readStatusButton);
      } else {
        readStatusButton.textContent = "Not read";
        addedBookReadStatus.appendChild(readStatusButton);
      }
      readStatusButton.addEventListener("click", () => {
        if (readStatusButton.textContent === "Not read") {
          readStatusButton.textContent = "Read";
          book.readStatus = "read";
        } else if (readStatusButton.textContent === "Read") {
          readStatusButton.textContent = "Not read";
          book.readStatus = "not read";
        }
      });

      // adding book removing utility to DOM and array
      let removeBook = document.createElement("td");
      newRow.appendChild(removeBook);
      let removeBookButton = document.createElement("button");
      removeBook.appendChild(removeBookButton);
      removeBookButton.textContent = "Remove";
      removeBookButton.addEventListener("click", () => {
        let index = myLibrary.indexOf(book);
        myLibrary.splice(index, 1);
        document.querySelectorAll(".newRow").forEach((e) => e.remove());
        this.refreshDOM();
      });
    });
  }
}

// SAMPLE BOOK
function sampleBook() {
  const sampleBook = new book("Factfullness", "Hans Rosling", 368, "not read");
  myLibrary.push(sampleBook);
  sampleBook.displayBooks(sampleBook);
}
sampleBook();
//

// ADD BOOK TO LIBRARY
function addBookToLibrary() {
  let title = formTitle.value;
  let author = formAuthor.value;
  let pages = formPages.value;
  if (formRead.checked) {
    readStatus = "read";
  } else readStatus = "not read";
  let newBook = new book(title, author, pages, readStatus);
  myLibrary.push(newBook);
  newBook.displayBooks();
}
addBook.addEventListener("click", addBookToLibrary);
//
