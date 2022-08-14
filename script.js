let myLibrary = [];

function book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.info = function () {
    return title + " by " + author + ", " + pages + " pages long, " + isRead;
  };
}

const HarryPotter = new book("Harry Potter", "J.K. Rowling", 325, "not read");
console.log(HarryPotter.info());

function addBookToLibrary() {
  // do stuff here
}
