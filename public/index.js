async function main() {
  let response = await fetch("http://localhost:3001/listBooks");
  let books = await response.json();

  //Once the array of books is retrieved, we use .forEach to add cards for each book to the DOM using the renderBook function
  books.forEach(renderBook);
}

//using the book (each element of the books array) variable, we then get a reference to the div element that will contain each information about each book
//and finally keeping adding information about each book to the div element that will contain this infomation to all the books
function renderBook(book) {
  let bookContainer = document.querySelector(".book-container");
  bookContainer.innerHTML += `
        <div class="col-sm-3">
            <div class="card" style="width: 100%;">
                ${
                  book.imageURL
                    ? `
                    <img class="card-img-top" src="${book.imageURL}" />
                `
                    : ``
                }
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Available: ${
                      book.quantity
                    }</h6>
                    <p class="card-text">${book.description}</p>
                </div>
            </div>
        </div>
    `;
}

main(); //code exectution begins on this line, line 1-33 deals with defining functions that are not automatically executed
