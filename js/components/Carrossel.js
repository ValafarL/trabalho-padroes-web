import styleCarrossel from "../../styles/carrossel.css" with { type: "css" };

class Carrossel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets = [styleCarrossel];
  }

  set data(dataObj) {
    this._onGetDataRender(dataObj);
  }

  _onGetDataRender(dataObj) {
    this.shadowRoot.innerHTML = /*html*/ `
      <section>
        <button id="prev">Anterior</button>
        <div id="carrossel-content">
          <img src="${dataObj[0].photo.path}" alt="${dataObj[0].photo.alt}" />
          <article>
            ${dataObj[0].biography}
          </article>
        </div>
        <button id="next">Próximo</button>
      </section>
    `;
  }
}

customElements.define("app-carrossel", Carrossel);
