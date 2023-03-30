function loadGame() {
    const tokens = document.location.href.split('?');
    const id = tokens[1].substring(3);

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.withCredentials = true;

    const baseURL = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
    xhr.open('GET', baseURL, true);
    xhr.setRequestHeader("X-RapidAPI-Key", "13c2c45298msha9791ec9ed77fd3p116451jsn98356a70a909");
    xhr.setRequestHeader("X-RapidAPI-Host", "free-to-play-games-database.p.rapidapi.com");
    xhr.send();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            const game = new FullGame(this.response);
            game.renderFullGame();
        }
    });
}

loadGame();