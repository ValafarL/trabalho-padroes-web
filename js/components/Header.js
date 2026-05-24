import styleHeader from "../../styles/header.css" with { type: "css" };

class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets = [styleHeader];
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = /*html*/ `
            <header>
                <button class="menu-toggle" aria-label="Abrir menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav class="nav-left">
                    <ul>
                        <li><a href="/pages/sobreOProjeto.html">Sobre o Projeto</a></li>
                    </ul>
                </nav>

                <a href="../index.html" class="logo">Logo</a>

                <nav class="nav-right">
                    <ul>
                        <li><a href="/pages/curadoria.html">Curadoria</a></li>
                        <li><a href="/pages/streamingEIndustria.html">Streaming e indústria</a></li>
                    </ul>
                </nav>
            </header>
        `;

    const toggleBtn = this.shadowRoot.querySelector(".menu-toggle");
    const headerElement = this.shadowRoot.querySelector("header");

    toggleBtn.addEventListener("click", () => {
      headerElement.classList.toggle("open");
    });
  }
}

customElements.define("app-header", Header);
