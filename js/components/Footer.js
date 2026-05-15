import styleFooter from "../../styles/footer.css" with { type: "css" };

class Footer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets = [styleFooter];
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = /*html*/ `
      <footer>
        Rodapé do site
      </footer>
    `;
  }
}
customElements.define("app-footer", Footer);
