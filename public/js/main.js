let charList = document.getElementById("characterList");

let characterTemplateSource = document.getElementById("charTemplate").innerHTML;
let characterTemplateHTML = Handlebars.compile(characterTemplateSource);

let tempChars = [
  {
    flag: "./images/0-flag.webp",
    character: "./images/0-character.webp",
    name: "Alexander",
  },
  {
    flag: "./images/0-flag.webp",
    character: "./images/0-character.webp",
    name: "Alexander",
  },
  {
    flag: "./images/0-flag.webp",
    character: "./images/0-character.webp",
    name: "Alexander",
  },
  {
    flag: "./images/0-flag.webp",
    character: "./images/0-character.webp",
    name: "Alexander",
  },
  {
    flag: "./images/0-flag.webp",
    character: "./images/0-character.webp",
    name: "Alexander",
  },
  {
    flag: "./images/0-flag.webp",
    character: "./images/0-character.webp",
    name: "Alexander",
  },
  {
    flag: "./images/0-flag.webp",
    character: "./images/0-character.webp",
    name: "Alexander",
  },
  {
    flag: "./images/0-flag.webp",
    character: "./images/0-character.webp",
    name: "Alexander",
  },
  {
    flag: "./images/0-flag.webp",
    character: "./images/0-character.webp",
    name: "Alexander",
  },
];

tempChars.forEach((char) => {
  charList.innerHTML += characterTemplateHTML(char);
});

let searchForm = document.getElementById("searchForm");
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let query = document.getElementById("search").value;
  query = query.toLowerCase();
  filterCharacters(query);
});

function filterCharacters(query) {
  let result = [];
  tempChars.forEach((li) => {
    if (li.name.toLowerCase().includes(query.toLowerCase())) {
      result.push(li);
    }
  });
  charList.innerHTML = "";
  result.forEach((char) => {
    charList.innerHTML += characterTemplateHTML(char);
  });
}

charList.addEventListener("click", (e) => {
  let name = e.target.children[2].value;
  window.location = "./character-details.html?name=" + name;
});
