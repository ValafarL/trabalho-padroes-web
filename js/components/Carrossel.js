import styleGlobal from "../../styles/global.css" with { type: "css" };
import styleCarrossel from "../../styles/carrossel.css" with { type: "css" };

class Carrossel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets = [styleGlobal, styleCarrossel];
  }

  set data(dataObj) {
    this._onGetDataRender(dataObj);
  }

  _onGetDataRender(dataObj) {
    this.shadowRoot.innerHTML = /*html*/ `
      <section>
        <button class="button" id="prev">Anterior</button>
        <div id="carrossel-content">
          <img src="${dataObj[0].photo.path}" alt="${dataObj[0].photo.alt}" />
          <article>
            ${dataObj[0].biography}
          </article>
        </div>
        <button class="button" id="next">Próximo</button>
      </section>
    `;

    this.shadowRoot.getElementById("prev").addEventListener("click", () => this.onClickPrev());
    this.shadowRoot.getElementById("next").addEventListener("click", () => this.onClickNext());
  }

  onClickNext() {
    console.log("clicou next");
  }
  onClickPrev() {
    console.log("clicou prev");
  }
}

customElements.define("app-carrossel", Carrossel);
