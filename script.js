const myLibrary = [];
let newRow;

// OBJECT CONSTRUCTOR
function book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}
//

// SAMPLE BOOK
const sampleBook = new book("Factfullness", "Hans Rosling", 368, "not read");
myLibrary.push(sampleBook);
displayBooks(sampleBook);
//

// ADD BOOK TO LIBRARY
function addBookToLibrary() {
  title = formTitle.value;
  author = formAuthor.value;
  pages = formPages.value;
  if (formRead.checked) {
    readStatus = "read";
  } else readStatus = "not read";
  const newBook = new book(title, author, pages, readStatus);
  myLibrary.push(newBook);
  displayBooks();
}

function displayBooks() {
  if (!document.body.contains(newRow)) {
    refreshDOM();
  } else if (document.body.contains(newRow)) {
    document.querySelectorAll(".newRow").forEach((e) => e.remove());
    refreshDOM();
  }
}

function refreshDOM() {
  const shelf = document.getElementById("shelf");
  myLibrary.forEach((book) => {
    newRow = document.createElement("tr");
    newRow.classList.add("newRow");
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

    let removeBook = document.createElement("td");
    newRow.appendChild(removeBook);
    let removeBookButton = document.createElement("button");
    removeBook.appendChild(removeBookButton);
    removeBookButton.textContent = "Remove";
    removeBookButton.addEventListener("click", () => {
      let index = myLibrary.indexOf(book);
      myLibrary.splice(index, 1);
      document.querySelectorAll(".newRow").forEach((e) => e.remove());
      refreshDOM();
    });
  });
  // console.log(myLibrary);
}

addBook.addEventListener("click", addBookToLibrary);
//
