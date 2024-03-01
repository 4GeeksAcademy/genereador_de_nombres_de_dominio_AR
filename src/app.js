/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
window.onload = function() {
  let pronouns = ["the", "our"];
  let adjectives = ["great", "big"];
  let nouns = ["jogger", "racoon"];
  let extensions = [".com", ".net", ".us", ".io", ".es"];

  for (let i = 0; i < pronouns.length; i++) {
    for (let j = 0; j < adjectives.length; j++) {
      for (let k = 0; k < nouns.length; k++) {
        for (let l = 0; l < extensions.length; l++) {
          let list = document.createElement("li");
          list.className = "text-light";
          list.innerText = `${pronouns[i]}${adjectives[j]}${nouns[k]}${extensions[l]}`;
          document.querySelector("#domains").appendChild(list);
          console.log(
            `${pronouns[i]}${adjectives[j]}${nouns[k]}${extensions[l]}`
          );
        }
      }
    }
  }
};
