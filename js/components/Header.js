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
                <a href="index.html">Cabeçalho do site</a>
                <nav>
                    <ul>
                        <li><a href="mapaRegional.html">Mapa Regional</a></li>
                        <li><a href="regiao.html">Região</a></li>
                        <li><a href="curadoria.html">Curadoria</a></li>
                        <li><a href="sobreOProjeto.html">Sobre o Projeto</a></li>
                        <li><a href="dadosETendencia.html">Dados e tendencia</a></li>
                        <li><a href="streamingEIndustria.html">streaming e industria</a></li>
                    </ul>
                </nav>
            </header>
        `;
  }
}

customElements.define("app-header", Header);
