class Library{
  constructor(books = []) {
  this.books = books;
}

bookCount () {
  return this.books.length;
};

addBook (newBook) {
  this.books.push(newBook);
};

addBooks (newBooks) {
  newBooks.forEach(book => this.books.push(book));
};

addBooks(newBooks) {
  this.books = [...this.books, ...newBooks]; //this is the spread operator - it takes in what is already in this.books and adds whatever is in newBooks and creates a new array with all of them
}

printInventory () {
  this.books.forEach(({ author, title }) => {
    console.log(`${title} by ${author}`);
  });
};
};


export default Library;

