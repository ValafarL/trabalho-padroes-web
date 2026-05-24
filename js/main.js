import "./components/Header.js";
import "./components/Footer.js";
import "./components/Genre.js";
import "./components/Carrossel.js";
import BrazilDotMap from "./components/BrazilDotMap.js";

/* Calculate screen size */
const screenWidth = window.innerWidth;
const mapSize = Math.min(screenWidth - 40, 600);

new BrazilDotMap({
  mount: "#brazil-map",
  width: mapSize,
  height: mapSize,
  onRegionClick: (regionId) => {
    window.location.href = `/pages/regiao.html?id=${regionId}`;
  },
});
