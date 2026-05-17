import styleGenre from "../../styles/genre.css" with { type: "css" };

class Genre extends HTMLElement {
  constructor() {
    super();
    this.carrossel = document.createElement("app-carrossel");
    console.log("asdasd", this.carrossel);
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets = [styleGenre];
  }

  set data(genreObj) {
    this._onGetDataRender(genreObj);
    this.carrossel.data = genreObj.musicians;
    this.shadowRoot.querySelector("#carrossel").appendChild(this.carrossel);
  }

  _onGetDataRender(genreObj) {
    this.shadowRoot.innerHTML = /*html*/ `
      <section id="${genreObj.id}">
        <div id="genre-header">
            <h3>${genreObj.name} - </h3>
            <a href="#">Playlist</a>
        </div>
        <div id="genre-description">
            <article>
                ${genreObj.description}
            </article>
            <img src="${genreObj.image.path}" alt="${genreObj.image.alt}" />
        </div>
        <h3>Principais músicos do gênero:</h3>
        <div id="carrossel"></div>
      </section>
    `;
  }
}

customElements.define("app-genre", Genre);
