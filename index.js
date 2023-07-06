import { like, dislike } from "./utils.js";
import dogs from "./data.js";
import Dog from "./Dogs.js";

console.log(dogs);

const firstDog = new Dog(dogs[0]);

document.getElementById("dog-image").innerHTML = firstDog.renderNameBio();

// let hasBeenSwiped = false;
// let hasBeenLiked = false;

like();
dislike();
