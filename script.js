"use strict";

// const day = prompt("type your favorite day of the week.");

// switch (day) {
//   case "monday":
//     console.log("training day! and also meet up with my father.");
//     break;
//   case "tuesday":
//   case "wednesday":
//     console.log("learning");
//     console.log("working");
//     break;
//   case "thursday":
//     console.log("training");
//     console.log("learning");
//     break;
//   case "friday":
//   case "saturday":
//     console.log("learning");
//     break;
//   case "sunday":
//     console.log("training");
//     break;
//   default:
//     console.log("Not a valid day");
// }

// let a = prompt("enter first number");
// let b = prompt("enter second number");

// function multiply(a, b) {
//   let result = a * b;
//   console.log(result);
//   return [a, b];
// }

// multiply(a, b);
// console.log(a, b);
// multiply(2, 3);
// console.log(a, b);

// // Block scope: c und d. Da beide variablen in einem block definiert wurden
// function multiply() {
//   let c = 3;
//   let d = 4;
//   let result;
//   result = c * d;
//   console.log(result);
// }

// multiply();

// multiply(2, 3); // 6, obwohl die Funktion erst später im Code definiert ist.
// function multiply(a, b) {
//   let result = a * b;
//   console.log(result);
// }

// console.log(multiply(2, 3)); // ReferenceError, wenn die Funktion vor ihrer Definition aufgerufen wird.
// const multiply = function (a, b) {
//   return a * b;
// };

// const person = {
//   name: "Alice",
//   greet: function () {
//     console.log("Hello, " + this.name);
//   },
// };

// person.greet();

// let a = 2;
// let b = 3;
// function multiply(a, b) {
//   let result = a * b;
//   console.log(result);
// }

// let person = {
//   name: "kateryna",
//   age: 25,
//   favoriteFood: "Steak",

//   checkIfAdult: function () {
//     return this.age >= 18
//       ? console.log("You are a grown up woman !")
//       : console.log("You are not yet an adult");
//   },
// };

// console.log(person.checkIfAdult());

// person.age >= 18
//   ? console.log("You are a grown up woman !")
//   : console.log("You are not yet an adult");

// Retournierter Wert einer fuction in der Console anzeichen
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// // Eine Variante

// console.log(calcAge1(1999));

// //Aber besser ist es den Wert in einer Variablen zu speichern:

// const age = calcAge1(1999);
// console.log(age);

window.onload = function () {
  let browserSound = document.getElementById("mySound");

  // Play the sound directly from the browserSound element
  browserSound.play().catch((error) => {
    console.log("Error playing sound:", error);
  });
};

const strawHatPirates = [
  {
    name: "Luffy",
    age: 19,
    color:
      "linear-gradient(176deg, rgba(255, 100, 100, 0.8), rgba(175, 0, 0, 0.8))",
    power: "Gum-Gum Fruit",
    img: "/images/luffy.png",
    bounty: "3,000,000,000 Berries",
    role: "Captain",
    origin: "Fuschia Village, East Blue",
    dream: "To find the One Piece and become the Pirate King",
    personality: "Brave, carefree, and fiercely loyal to his friends",
  },
  {
    name: "Zoro",
    age: 21,
    color:
      "linear-gradient(176deg, rgba(100, 255, 100, 0.8), rgba(0, 128, 0, 0.8))",
    power: "Three-Sword Style",
    img: "/images/zoro.png",
    bounty: "1,111,000,000 Berries",
    role: "Swordsman",
    origin: "Shimotsuki Village, East Blue",
    dream: "To become the world’s greatest swordsman",
    personality: "Serious, determined, and often gets lost",
  },
  {
    name: "Nami",
    age: 20,
    color:
      "linear-gradient(176deg, rgba(255, 165, 100, 0.8), rgba(200, 120, 0, 0.8))",
    power: "Weather Manipulation",
    img: "/images/nami.png",
    bounty: "366,000,000 Berries",
    role: "Navigator",
    origin: "Cocoyasi Village, East Blue",
    dream: "To draw a complete map of the world",
    personality:
      "Smart, resourceful, loves money but deeply cares for her crew",
  },
  {
    name: "Usopp",
    age: 19,
    color:
      "linear-gradient(176deg, rgba(210, 180, 140, 0.8), rgba(139, 69, 19, 0.8))",
    power: "Sniping and Lying",
    img: "/images/usopp.png",
    bounty: "500,000,000 Berries",
    role: "Sniper",
    origin: "Syrup Village, East Blue",
    dream: "To become a brave warrior of the sea",
    personality: "Cowardly but brave when it counts, excellent storyteller",
  },
  {
    name: "Sanji",
    age: 21,
    color:
      "linear-gradient(176deg, rgba(255, 255, 150, 0.8), rgba(200, 165, 0, 0.8))",
    power: "Expert Martial Arts",
    img: "/images/sanji.png",
    bounty: "1,032,000,000 Berries",
    role: "Cook",
    origin: "North Blue (later Baratie Restaurant)",
    dream: "To find the All Blue (a sea where all the world’s fish gather)",
    personality: "Chivalrous, a flirt with women, dedicated to his cooking",
  },
  {
    name: "Chopper",
    age: 17,
    color:
      "linear-gradient(176deg, rgba(173, 216, 230, 0.8), rgba(0, 150, 200, 0.8))",
    power: "Human-Human Fruit",
    img: "/images/chopper.png",
    bounty: "1,000 Berries",
    role: "Doctor",
    origin: "Drum Island, Grand Line",
    dream: "To become a doctor who can cure any disease",
    personality: "Innocent, naive, and loves to be praised (but shy about it)",
  },
  {
    name: "Robin",
    age: 30,
    color:
      "linear-gradient(176deg, rgba(255, 150, 150, 0.8), rgba(175, 0, 175, 0.8))",
    power: "Hana-Hana Fruit",
    img: "/images/robin.png",
    bounty: "930,000,000 Berries",
    role: "Archaeologist",
    origin: "Ohara, West Blue",
    dream: "To uncover the true history of the world (Void Century)",
    personality:
      "Calm, intelligent, dark sense of humor, cares deeply for history",
  },
  {
    name: "Franky",
    age: 36,
    color:
      "linear-gradient(176deg, rgba(0, 200, 200, 0.8), rgba(0, 150, 200, 0.8))",
    power: "Engineering",
    img: "/images/franky.png",
    bounty: "394,000,000 Berries",
    role: "Shipwright",
    origin: "Water 7, Grand Line",
    dream: "To build and sail the world’s greatest ship",
    personality:
      'Energetic, eccentric, and loves to show off his "super" attitude',
  },
  {
    name: "Brook",
    age: 90,
    color:
      "linear-gradient(176deg, rgba(240, 240, 240, 0.8), rgba(50, 50, 50, 0.8))",
    power: "Revive-Revive Fruit",
    img: "/images/brook.png",
    bounty: "383,000,000 Berries",
    role: "Musician",
    origin: "West Blue",
    dream: "To reunite with Laboon, a whale he met many years ago",
    personality:
      "Polite, humorous (especially with skeleton jokes), loves music",
  },
  {
    name: "Jinbe",
    age: 46,
    color:
      "linear-gradient(176deg, rgba(135, 206, 220, 0.8), rgba(0, 0, 100, 0.8))",
    power: "Fish-Man Karate",
    img: "/images/jinbe.png",
    bounty: "1,100,000,000 Berries",
    role: "Helmsman",
    origin: "Fish-Man Island, Grand Line",
    dream: "To bring peace between humans and fish-men",
    personality: "Calm, wise, highly respectful, and loyal to his values",
  },
];

// Funktion zur Umwandlung der Bounty in Millionen
function formatBounty(bounty) {
  // Entferne die " Berries" und ersetze die Tausender durch nichts
  const numericValue = parseInt(bounty.replace(/[^0-9]/g, ""), 10);
  // Teile durch 1.000.000
  const millionValue = numericValue / 1000000;
  // Rückgabe der formatierten String mit 2 Dezimalstellen
  return ` ${millionValue.toFixed(0)} m`; // z.B. "3.000 million"
}

// Loop through each pirate and generate HTML
const piratesContainer = document.getElementById("pirates-container");

strawHatPirates.forEach((strawHatPirate) => {
  const pirateHTML = `
    <div class="wrapper">
      <div class="overviewInfo" style="background-image: ${
        strawHatPirate.color
      };">
        <div class="actions">
          <div class="backbutton">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.02698 11.9929L5.26242 16.2426L6.67902 14.8308L4.85766 13.0033L22.9731 13.0012L22.9728 11.0012L4.85309 11.0033L6.6886 9.17398L5.27677 7.75739L1.02698 11.9929Z" fill="currentColor"/>
            </svg>
          </div>
          <h1>${strawHatPirate.name}</h1>
          <div class="cartbutton neurobutton">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5.79166 2H1V4H4.2184L6.9872 16.6776H7V17H20V16.7519L22.1932 7.09095L22.5308 6H6.6552L6.08485 3.38852L5.79166 2ZM19.9869 8H7.092L8.62081 15H18.3978L19.9869 8Z" fill="currentColor"/>
              <path d="M10 22C11.1046 22 12 21.1046 12 20C12 18.8954 11.1046 18 10 18C8.89543 18 8 18.8954 8 20C8 21.1046 8.89543 22 10 22Z" fill="currentColor"/>
              <path d="M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20C15 18.8954 15.8954 18 17 18C18.1046 18 19 18.8954 19 20Z" fill="currentColor"/>
            </svg>
          </div>
        </div>

        <div class="productImage">
          <img src="${strawHatPirate.img}" alt="${strawHatPirate.name} image" />
        </div>

        <div class="productinfo">
          <div class="grouptext">
            <h3>AGE</h3>
            <p>${strawHatPirate.age}</p>
          </div>
          <div class="grouptext">
            <h3>POWER</h3>
            <p>${strawHatPirate.power}</p>
          </div>

          <div class="grouptext">
            <h3>BOUNTY</h3>
            <p>${strawHatPirate.bounty}</p>
          </div>
        </div>
      </div>
      <!-- overview info -->

      <div class="productSpecifications">
        <h3 style="margin-bottom: 9px">Dream :</h3>
        <p>${strawHatPirate.dream}</p>
        <h3 style="margin-top: 8px; margin-bottom: 9px">Personality :</h3>
        <p>${strawHatPirate.personality}</p>

        <div class="checkoutButton">
          <div class="priceTag"><span>B  </span><span>/ </span> ${formatBounty(
            strawHatPirate.bounty
          )}</div>
          <button class="preorder">
            <p>Preorder</p>
            <div class="buttonaction">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2395 11.0033L1.12499 11.0012L1.12529 13.0012L19.245 13.0033L17.4309 14.8308L18.818 16.2426L23.0677 11.9929Z" fill="currentColor"/>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  `;

  // Füge die generierte HTML in den Container ein
  piratesContainer.innerHTML += pirateHTML;
});
