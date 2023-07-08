import dogsData from "./data.js";
import Dog from "./dogs.js";

const bella = new Dog(dogsData.Bella);
const rex = new Dog(dogsData.Rex);
const teddy = new Dog(dogsData.Teddy);

document.getElementById("dog-image").innerHTML = teddy.renderNameBio();
