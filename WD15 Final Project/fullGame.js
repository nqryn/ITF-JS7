class FullGame extends Game {
    constructor(gameJSON) {
        super(gameJSON);
        this.description = gameJSON["description"];
        this.screenshots = gameJSON["screenshots"].map(ss => ss["image"]);
        this.minSysReq = gameJSON["minimum_system_requirements"];
    }

    renderFullGame() {
        const mainContainer = document.getElementById("main");
        mainContainer.appendChild(this.renderTitle());
        mainContainer.appendChild(this.renderThumbnail());
        mainContainer.appendChild(this.renderDescription());
        mainContainer.appendChild(this.renderScreenshots());
    }

    renderDescription() {
        const description = document.createElement('p');
        description.innerText = this.description;
        return description;
    }

    renderScreenshots() {
        const container = document.createElement("div");
        container.classList.add("carousel");
        container.classList.add("slide");
        container.setAttribute("id", "carouselExampleSlidesOnly");
        container.setAttribute("data-ride", "carousel");

        const inner = document.createElement("div");
        inner.classList.add("carousel-inner");
        this.screenshots.forEach((element, index) => {
            inner.appendChild(this.renderScreenshot(element, index));
        });

        container.appendChild(inner);
        return container;
        
    }

    renderScreenshot(shot, index) {
        const div = document.createElement("div");
        div.classList.add('carousel-item');

        const img = document.createElement("img");
        img.setAttribute("src", shot);
        img.classList.add("d-block");
        img.classList.add("w-100");

        if (!index) {
            img.classList.add("active");
        }

        div.appendChild(img);
        return div;
    }
}