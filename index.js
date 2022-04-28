function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books')
    .then(res => res.json())
    .then(json => renderBooks(json))
}

function renderBooks(books) {
  // console.log(books)
  const main = document.querySelector('main');
  books.forEach(book => {
    // console.log(book.characters[1031])
    const h2 = document.createElement('h2');
    const span = document.createElement('span')
    h2.innerHTML = book.name;
    span.textContent = ` ${book.numberOfPages}`
    span.style.color = 'goldenrod';
    h2.appendChild(span);
    main.appendChild(h2);
    if (book.characters[1031] != undefined) {
      const a = document.createElement('a')
      a.href = `${book.characters[1031]}`
      a.text = ` ${book.name} 1031`
      main.appendChild(a)
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  fetchBooks();
});
