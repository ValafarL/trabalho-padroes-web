import { regions } from "../assets/data/regions.js";

let region = regions["sul"];

console.log(region);

region["genres"].forEach((g) => {
  const genre = document.createElement("app-genre");
  genre.data = g;
  document.querySelector("#genres").appendChild(genre);
});
