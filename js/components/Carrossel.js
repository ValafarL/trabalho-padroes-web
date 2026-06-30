import styleGlobal from "../../styles/global.css" with { type: "css" };
import styleCarrossel from "../../styles/carrossel.css" with { type: "css" };

class Carrossel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets = [styleGlobal, styleCarrossel];
    this._data = [];
    this._currentIndex = 0;
  }

  set data(dataObj) {
    this._data = Array.isArray(dataObj) ? dataObj : [];
    this._currentIndex = 0;
    this._onGetDataRender();
  }

  _getCurrentItem() {
    if (!this._data.length) {
      return null;
    }

    return this._data[this._currentIndex];
  }

  _onGetDataRender() {
    const currentItem = this._getCurrentItem();

    if (!currentItem) {
      this.shadowRoot.innerHTML = /*html*/ `
        <section>
          <button class="button" id="prev" disabled>Anterior</button>
          <div id="carrossel-content">
            <article>Nenhum músico disponível.</article>
          </div>
          <button class="button" id="next" disabled>Próximo</button>
        </section>
      `;
      return;
    }

    this.shadowRoot.innerHTML = /*html*/ `
      <section>
        <button class="button" id="prev">Anterior</button>
        <div id="carrossel-content">
          <img src="${currentItem.photo.path}" alt="${currentItem.photo.alt}" />
          <article>
            ${currentItem.biography}
          </article>
        </div>
        <button class="button" id="next">Próximo</button>
      </section>
    `;

    this.shadowRoot.getElementById("prev").addEventListener("click", () => this.onClickPrev());
    this.shadowRoot.getElementById("next").addEventListener("click", () => this.onClickNext());
  }

  onClickNext() {
    if (!this._data.length) {
      return;
    }

    this._currentIndex = (this._currentIndex + 1) % this._data.length;
    this._onGetDataRender();
  }
  onClickPrev() {
    if (!this._data.length) {
      return;
    }

    this._currentIndex = (this._currentIndex - 1 + this._data.length) % this._data.length;
    this._onGetDataRender();
  }
}

customElements.define("app-carrossel", Carrossel);
