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
        <p>Gilmar Ito - Lucas Cezimbra - Lucas Ganem</p>
        <p>2026</p>
      </footer>
    `;
  }
}
customElements.define("app-footer", Footer);
