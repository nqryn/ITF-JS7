

const xhr = new XMLHttpRequest();
xhr.responseType = 'json';

const id = document.location.search.substr(4);

const url = `https://gutendex.com/books/${id}`;
const method = "GET";

xhr.open(method, url, true);
xhr.send();

xhr.onload = function() {
    console.log(`Am cerut de la server cartea cu ID-ul ${id}`);
    console.log(this.response.title);
    const container = document.getElementById("container");
    const book = document.createElement('div');
    book.innerText = `${this.response.title} - ${JSON.stringify(this.response.authors)}`;

    container.appendChild(book);
}

