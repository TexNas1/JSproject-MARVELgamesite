// source: https://www.marvel.com/characters
// images: https://comicvine.gamespot.com/avengers-assemble/4075-19/characters/
// an array of objects containing the bio data of THE AVENGERS characters
const characters = [
  {
    id: 1,
    Avenger: "Iron Man",
    Name: "Tony Stark",
    Actor: "Robert Drowney Jr",
    Image: "./images/IronMan.png",
    Bio: "Genius. Billionaire. Philanthropist. Tony Stark's confidence is only matched by his high-flying abilities as the hero called Iron Man.",
  },
  {
    id: 2,
    Avenger: "Captain America",
    Name: "STEVE ROGERS",
    Actor: "Chris Evans",
    Image: "./images/captainAmerica.png",
    Bio: "Recipient of the Super Soldier serum, World War II hero Steve Rogers fights for American ideals as one of the world’s mightiest heroes and the leader of the Avengers.",
  },
  {
    id: 3,
    Avenger: "Black Widow",
    Name: "Natasha Romanoff",
    Actor: "Scarlett Johansson",
    Image: "./images/blackWidow.png",
    Bio: "Natasha Romanoff, separated from the now-fractured Avengers, confronts the dark path she took to becoming a spy and assassin, as well as events that followed.",
  },
  {
    id: 4,
    Avenger: "Falcon",
    Name: "Samuel Thomsan Wilson",
    Actor: "Anthony Mackie",
    Image: "./images/falcon.png",
    Bio: "A social worker turned hero, Sam Wilson's bleak outlook on life was wiped away the day he met Captain America. Using a winged costume and his remarkable combat prowess and avian telepathy, he became the Falcon - defender of Harlem.",
  },
  {
    id: 5,
    Avenger: "Hulk",
    Name: "Bruce Banner",
    Actor: "Mark Ruffalo",
    Image: "./images/hulk.png",
    Bio: "Dr. Bruce Banner lives a life caught between the soft-spoken scientist he’s always been and the uncontrollable green monster powered by his rage.",
  },
  {
    id: 6,
    Avenger: "Thor",
    Name: "THOR ODINSON",
    Actor: "Chris Hemsworth",
    Image: "./images/thor.png",
    Bio: "The son of Odin uses his mighty abilities as the God of Thunder to protect his home Asgard and planet Earth alike.",
  },
];

// giving output for rating slider
let slider = document.getElementById("myRange");
let output = document.getElementById("output");
let feedback = document.getElementById("feedback");
output.innerHTML = slider.value;

// giving feedback based on different responses by user
slider.oninput = function () {
  let val = this.value;
  output.innerHTML = val;
  if (val > 0 && val < 3) {
    feedback.innerHTML = "Oh! We're sorry.";
  } else if (val > 2 && val < 6) {
    feedback.innerHTML = "Lets try Playing Again.";
  } else if (val > 5 && val < 8) {
    feedback.innerHTML = "Thanks. We'll improve.";
  } else {
    feedback.innerHTML = "Great that you've liked.";
  }
};

// selecting navigation button to show nav links on click
const navButton = document.querySelector(".navigateBtn");
const navlinks = document.querySelector(".nav");
navButton.addEventListener("click", function () {
  // toggle the display class to show and hide navigation
  navlinks.classList.toggle("display");
});

// selecting submit button to show user selected input
const submitButton = document.querySelector(".submitBtn");
// getting user input character
submitButton.addEventListener("click", function () {
  // Selecting the input element and get its value
  let inputVal = document.getElementById("character").value;
  // Displaying the value
  let userInput = document.getElementById("userInput");
  userInput.innerHTML = inputVal;
});

// selecting random number on click of play button and mapping to a character bio
const playButton = document.querySelector(".play");
playButton.addEventListener("click", function () {
  let rndNum = randomInteger(1, 6);
  // console.log(rndNum);
  const outputCharacter = characters.filter((chr) => chr.id == rndNum);
  // checking if random guess is same as entered by user
  let userInput = document.getElementById("userInput").innerHTML;
  console.log(userInput);
  let gameResult = document.getElementById("win-message");
  // first checking whether user has entered input or not
  if (userInput.length > 0) {
    // then checking if guess is right, displaying the win message
    if (userInput.toLowerCase() === outputCharacter[0].Avenger.toLowerCase()) {
      gameResult.innerHTML = "Hurrah!! That's a WIN!";
    } else {
      gameResult.innerHTML = "Oops!! Let's try Again";
    }
  }
  // filling in the outputs on the page
  let avenger = document.getElementById("avenger");
  let name = document.getElementById("name");
  let actor = document.getElementById("actor");
  let bio = document.getElementById("bio");
  let image = document.getElementById("characterImg");
  avenger.innerHTML = outputCharacter[0].Avenger;
  name.innerHTML = outputCharacter[0].Name;
  actor.innerHTML = outputCharacter[0].Actor;
  bio.innerHTML = outputCharacter[0].Bio;
  image.src = outputCharacter[0].Image;
});

// Returns an integer random number between min (included) and max (included)
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
