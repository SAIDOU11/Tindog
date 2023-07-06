import { like, dislike } from "./utils.js";

import dogs from "./data.js";
import Dog from "./Dogs.js";

const firstDog = new Dog(dogs[1]);

document.getElementById("dog-image").innerHTML = firstDog.renderNameBio();

// const allDogs = ["Rex", "Bella", "Teddy"];

// let hasBeenSwiped = false;
// let hasBeenLiked = false;

like();
dislike();
