import { regions } from "../assets/data/regions.js";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
let region = regions["sul"];

region["genres"].forEach((g) => {
  const genre = document.createElement("app-genre");
  genre.data = g;
  document.querySelector("#genres").appendChild(genre);
});
