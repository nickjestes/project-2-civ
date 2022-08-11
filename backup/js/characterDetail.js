let characterDetailSource = document.getElementById("eachCharTemplate");
let characterDetailTemplate = Handlebars.compile(
  characterDetailSource.innerHTML
);

// test obj
let characterDetails = {
  alexander: {
    name: "Alexander",
    character: "./images/0-character.webp",
    flag: "./images/0-flag.webp",
    bio: "Alexander III (20/21 July 356 BC – 10/11 June 323 BC), more commonly known as Alexander the Great, was king of Macedon from 336 BC until his death, and is considered one of history's most successful generals and conquerors, believed to have never been defeated in battle. He leads the Macedonians in Civilization VI.",
    affiliations: "Lorem Ipsum",
    abilities: "Lorem Ipsum",
    voiceLines: "Lorem Ipsum",
    funFact:
      "Alexander has a helmet with a lion motif that he takes off when greeting a player and puts on after a denunciation or a declaration of war. He sometimes brandishes his kopis, as well.",
    url: "https://civilization.fandom.com/wiki/Alexander_(Civ6)",
  },
};

let url = new URL(window.location);
let characterName = url.searchParams.get("name").toLowerCase();
document.getElementById("characterDetail").innerHTML = characterDetailTemplate(
  characterDetails[characterName]
);
