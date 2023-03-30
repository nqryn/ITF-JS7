class Game {
    constructor(gameJSON) {
        this.id = gameJSON["id"];
        this.title = gameJSON["title"];
        this.thumbnail = gameJSON["thumbnail"];
        this.shortDescription = gameJSON["short_description"];
        this.gameURL = gameJSON["game_url"];
        this.genre = gameJSON["genre"];
        this.platform = gameJSON["platform"];
        this.publisher = gameJSON["publisher"];
        this.developer = gameJSON["developer"];
        this.releaseDate = new Date(gameJSON["release_date"]);
    }

    renderGame() {
        // Function that returns an html object for this game
        const col = document.createElement('div');
        col.classList.add('col');

        const mainDiv = document.createElement('div');
        mainDiv.classList.add('card');

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        cardBody.appendChild(this.renderTitle());
        cardBody.appendChild(this.renderDescription());

        const buttonsRow = document.createElement("div");
        buttonsRow.classList.add("row");
        buttonsRow.appendChild(this.renderButton());
        buttonsRow.appendChild(this.renderGameButton());

        cardBody.appendChild(buttonsRow);

        mainDiv.appendChild(this.renderThumbnail());
        mainDiv.appendChild(cardBody);

        col.appendChild(mainDiv);
        return col;
    }

    renderTitle() {
        const titleHeader = document.createElement('h4');
        titleHeader.innerText = this.title;
        titleHeader.classList.add('card-title');

        return titleHeader;
    }

    renderThumbnail() {
        const img = document.createElement('img');
        img.setAttribute('src', this.thumbnail);
        // img.setAttribute('width', '300');
        // img.setAttribute('height', '200');
        img.classList.add('card-img-top');

        return img;
    }

    renderDescription() {
        const description = document.createElement('p');
        let descText = this.shortDescription;
        if (this.shortDescription.length > 50) {
            descText = this.shortDescription.substr(0, 50) + "...";
        }

        description.innerText = descText;
        description.classList.add('card-text');
        return description;
    }

    renderButton() {
        const link = document.createElement('a');
        link.setAttribute('href', this.gameURL);
        link.innerText = 'Go to Game';
        link.classList.add('btn');
        link.classList.add('btn-warning');
        link.classList.add('my-1');
        return link;
    }

    renderGameButton() {
        const link = document.createElement('a');
        link.setAttribute('href', `game.html?id=${this.id}`);
        link.innerText = 'More details';
        link.classList.add('btn');
        link.classList.add('btn-dark');
        return link;
    }
}