
let games = [];

function renderAllGames() {
    const mainContainer = document.getElementById("main");
    let row;

    const elementsPerRow = Math.floor(window.innerWidth / 300) + 1;

    games.forEach((game, index) => {
        if (index % elementsPerRow === 0) {
            row = document.createElement('div');
            row.classList.add('row');
            row.classList.add('my-5');
        }
        row.appendChild(game.renderGame());
        mainContainer.appendChild(row);
    });
}

function loadGames() {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.withCredentials = true;

    const baseURL = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
    xhr.open('GET', baseURL, true);
    xhr.setRequestHeader("X-RapidAPI-Key", "13c2c45298msha9791ec9ed77fd3p116451jsn98356a70a909");
    xhr.setRequestHeader("X-RapidAPI-Host", "free-to-play-games-database.p.rapidapi.com");
    xhr.send();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            this.response.forEach((element, index) => {
                const game = new Game(element);
                games.push(game);
            });
            renderAllGames();
        }
    });

}

loadGames();