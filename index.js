import dogsData from "./data.js";
import Dog from "./dogs.js";

let dogArray = ["Rex", "Bella", "Teddy"];
let isWaiting = false;

const getNewDog = () => {
  isWaiting = true;
  const nextDog = dogsData[dogArray.shift()];
  return nextDog ? new Dog(nextDog) : {};
};

const choice = () => {
  firstDog.renderNameBio();
};

let firstDog = getNewDog();

document.getElementById("dog-image").innerHTML = firstDog.renderNameBio();

// let hasBeenSwiped = false;
// let hasBeenLiked = false;
