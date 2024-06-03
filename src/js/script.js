
// Add reference to handlebars template
const template = Handlebars.compile(document.querySelector('#template-book').innerHTML);

// Add reference to book list container
const bookListContainer = document.querySelector('.books-list');

// Add function render
const render = function() {

  // Iterate through dataSource.books array
  for (const book of dataSource.books) {

    // Generate HTML based on template and book data
    const generatedHTML = template(book);

    // Generate DOM element based on given HTML
    const generatedDOM = utils.createDOMFromHTML(generatedHTML);

    bookListContainer.appendChild(generatedDOM);
  }
};

render();

/// Add empty array for favourite books
const favouriteBooks = [];

const initActions = function() {

  // Add double click event Listener to book
  bookListContainer.addEventListener('dblclick', function(event) {

    event.preventDefault();

    // Add reference to clicked element parent
    const clickedElement = event.target.offsetParent;

    // Check if clicked element is a book element
    if (clickedElement.classList.contains('book__image')) {

      // Get book data-id attribute value
      const bookId = clickedElement.getAttribute('data-id');

      // Add or remove book ID to favourite books
      if (!favouriteBooks.includes(bookId)) {
        favouriteBooks.push(bookId);
      } else {
        const index = favouriteBooks.indexOf(bookId);
        favouriteBooks.splice(index, 1);
      }

      // Add or remove class favorite to book HTML
      if (!clickedElement.classList.contains('favorite')) {
        clickedElement.classList.add('favorite');
      } else {
        clickedElement.classList.remove('favorite');
      }
  
    }

  });

};

// Run initActions function
initActions();
