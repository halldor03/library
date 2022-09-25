const myLibrary = [];

// OBJECT CONSTRUCTOR
function book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}
//

// SAMPLE BOOK
function addSampleBook(title, author, pages) {
  const sampleBook = new book(title, author, pages);
  myLibrary.push(sampleBook);
  // displayBook(sampleBook);
}
addSampleBook("Factfullness", "Hans Rosling", 368);
//

// ADD BOOK TO LIBRARY
function addBookToLibrary() {
  title = formTitle.value;
  author = formAuthor.value;
  pages = formPages.value;
  const newBook = new book(title, author, pages);
  myLibrary.push(newBook);
  test();

  // displayBook(newBook);
}

function test() {
  for (let i = 0; i <= myLibrary.length; i++) {
    console.log(myLibrary[i]);
  }
}

// function displayBook(book) {
//   const shelf = document.getElementById("shelf");

//   let newRow = document.createElement("tr");
//   shelf.appendChild(newRow);

//   let addedBookTitle = document.createElement("td");
//   newRow.appendChild(addedBookTitle);
//   addedBookTitle.textContent = book.title;

//   let addedBookAuthor = document.createElement("td");
//   newRow.appendChild(addedBookAuthor);
//   addedBookAuthor.textContent = book.author;

//   let addedBookPages = document.createElement("td");
//   newRow.appendChild(addedBookPages);
//   addedBookPages.textContent = book.pages;

//   let addedBookReadStatus = document.createElement("td");
//   newRow.appendChild(addedBookReadStatus);
//   let readStatusButton = document.createElement("button");
//   if (formRead.checked === true) {
//     readStatusButton.textContent = "Read";
//     addedBookReadStatus.appendChild(readStatusButton);
//   } else {
//     readStatusButton.textContent = "Not read";
//     addedBookReadStatus.appendChild(readStatusButton);
//   }
//   readStatusButton.addEventListener("click", () => {
//     if (readStatusButton.textContent === "Not read") {
//       readStatusButton.textContent = "Read";
//     } else readStatusButton.textContent = "Not read";
//   });

//   let removeBook = document.createElement("td");
//   newRow.appendChild(removeBook);
//   let removeBookButton = document.createElement("button");
//   removeBook.appendChild(removeBookButton);
//   removeBookButton.textContent = "Remove";
//   removeBookButton.addEventListener("click", () => {
//     newRow.remove();
//   });
// }

addBook.addEventListener("click", addBookToLibrary);
//
