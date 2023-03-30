class FullGame extends Game {
  constructor(gameJSON) {
    super(gameJSON);
    this.description = gameJSON["description"];
    this.screenshots = gameJSON["screenshots"].map((ss) => ss["image"]);
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
    const description = document.createElement("p");
    description.innerText = this.description;
    return description;
  }

  renderScreenshots() {
    const container = document.createElement("div");
    container.classList.add("carousel");
    container.classList.add("slide");
    container.setAttribute("id", "carouselExample");

    const inner = document.createElement("div");
    inner.classList.add("carousel-inner");

    const caruselActive = document.createElement("div");
    caruselActive.classList.add("carousel-item");

    this.screenshots.forEach((element) => {
      inner.appendChild(this.renderScreenshot(element));
      caruselActive.classList.add("active");
    });

    container.appendChild(inner);
    return container;
  }

  renderScreenshot(shot) {
    const div = document.createElement("div");
    div.classList.add("carousel-item");
    div.classList.add("active");

    const img = document.createElement("img");
    img.setAttribute("src", shot);
    img.classList.add("d-block");
    img.classList.add("w-100");
    div.appendChild(img);
    return div;
  }
}
