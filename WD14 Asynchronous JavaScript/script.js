
// Cream un obiect de tipul XMLHttpRequest, pentru a putea face un request
const xhr = new XMLHttpRequest();
// Pentru a primi raspunsul in format JSON, facem asa
xhr.responseType = 'json';
// const url = "https://simple-books-api.glitch.me/books";
const url = "https://gutendex.com/books";
const method = "GET";

/**
 * Metoda open are 3 parametrii:
 * 1. Metoda HTTP folosita (get, post, put,  patch, delete)
 * 2. URL-ul, adica endpoint-ul
 * 3. True daca vrem ca request-ul sa se faca asincron
 */
xhr.open(method, url, true);
xhr.send();

const booksContainer = document.getElementById("booksContainer");

function loadBook(book) {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('col');
    const bookURL = `book.html?id=${book.id}`

    bookDiv.innerHTML = `<div class="my-book">` + 
        `<a href=${bookURL}>` + 
            `<div>${book.title}</div>` + 
            `<div>${book.languages[0]}</div>` + 
            `<div>${book.authors[0].name}</div>` +
        `</a></div`;
    
    booksContainer.appendChild(bookDiv);
}

xhr.onload = function() {
    // onload este un event handler care va fi apelat atunci cand serverul imi da un raspuns,
    // iar continutul raspunsului respectiv se gaseste in this.
    console.log(`Am terminat requestul cu statusul ${this.status}`); 
    console.log(typeof(this.response));
    // this.response va fi JSON-ul primit de la server, pe care il pot trata chiar ca pe un obiect JS
    console.log(this.response["count"]);
    console.log(this.response.count);

    // Extrag cartile din JSON intr-o variabila
    const books = this.response.results;
    for (let book of books) {
        // console.log(`${book.id} - ${book.title}`);
        loadBook(book);
    }

}

xhr.onerror = function() {
    // onerror este un event handler care se va apela in caz de eroare
    console.log("Oups... a aparut o eroare");
}

console.log("Am trimis requestul catre server...");

