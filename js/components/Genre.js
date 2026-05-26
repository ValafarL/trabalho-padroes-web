import styleGlobal from "../../styles/global.css" with { type: "css" };
import styleGenre from "../../styles/genre.css" with { type: "css" };

class Genre extends HTMLElement {
  constructor() {
    super();
    this.carrossel = document.createElement("app-carrossel");
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets = [styleGlobal, styleGenre];
  }

  set data(genreObj) {
    this._onGetDataRender(genreObj);
    this.carrossel.data = genreObj.musicians;
    this.shadowRoot.querySelector("#carrossel").appendChild(this.carrossel);
  }

  _onGetDataRender(genreObj) {
    this.shadowRoot.innerHTML = /*html*/ `
      <section class="genre-container"">
      <div id="genre-header">
      <h3>${genreObj.name} - </h3>
      <a class="button" href="#">Playlist</a>
      </div>
        <div  id="genre-description">
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
