import { regions } from "../assets/data/regions.js";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
let region = regions[id] || regions["sul"];

const history = document.querySelector("#history");
const regionTitle = document.querySelector("#region-title");
const genresLink = document.querySelector("#genres-link");


history.textContent = region.history;
regionTitle.textContent = region.name;

region["genres"].forEach((g) => {
  if (genresLink) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.className = "genres-a";
    a.href = `#${g.id}`;
  a.textContent = g.name;
  li.appendChild(a);
  genresLink.appendChild(li);
  }

  const genre = document.createElement("app-genre");
  genre.id = `${g.id}`;
  genre.data = g;
  document.querySelector("#genres").appendChild(genre);
});
