//defining a function called listBooks, at this point the code is not executed, just telling the computer what will happen when we call listBooks function
async function listBooks() {
  const response = await fetch("http://localhost:3001/listBooks"); //the web address gets the list of books from the db.json file
  const books = await response.json(); //books is now the name we can refer to the list of books we got from line 3

  //books is the name of the array
  //forEach is a javascript function that has been defined for us, forEach is a part of javascript
  //forEach looks at each item in the array using the name of the function between the parenthesis
  //renderBook is the name of the function where we look at each item in the array, in our case we look at each book (item) in the books array
  books.forEach(renderBook);
}

//this function that we wrote is used with the forEach javascript function on line 10,
//the name between the parenthesis after renderBook represents each item (book)
//because book is the name to refer to each book, book.title is the title of the book & book.id is the id of the book
//and because renderBook is between the parenthesis forEach, this renderBook function is done for each book
function renderBook(book) {
  let books = document.getElementById("books");
  let bookLineItem = document.createElement("li");
  bookLineItem.innerHTML =
    book.title +
    "<input id='input" +
    book.id + //book.id is replaced with an actual number of the book.id in the browser
    "' type='text'>" +
    '<button onclick="updateBook(' +
    book.id + //book.id is replaced with an actual number of the book.id in the browser
    "," +
    "document.getElementById(" +
    "'input" +
    book.id + //book.id is replaced by the actual number of the book.id in the browser, "input" + book.id becomes input1 for the first book
    "'))\">save</button>";
  books.appendChild(bookLineItem);
}

function updateBook(idvar, quantityvar) {
  const response = fetch("http://localhost:3001/updateBook", {
    method: "PATCH",
    body: JSON.stringify({ id: idvar, quantity: quantityvar.value }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
}

//now we are calling listBooks function
listBooks();
